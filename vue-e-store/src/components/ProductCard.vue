<template>
    <div class="w-56 rounded-xl relative hover:shadow-xl transition hover:-translate-y-1 flex flex-col bg-gray-50">
        <img v-if="!isAddedToFavourites" class="ml-2 absolute top-1 right-1" src="/like-1.svg" @click="toggleFavourites()">
        <img v-if="isAddedToFavourites" class="ml-2 absolute top-1 right-1" src="/like-2.svg" @click="toggleFavourites()">
        <img class="rounded-xl min-h-56 min-w-56 self-center object-cover" :src="product.images[0]">
        <div class="flex flex-col mt-1">
            <div class="ml-2 text-emerald-500">{{ usd2Rub(product.price) }} ₽</div>
            <div class="ml-2 leading-5 overflow-hidden max-h-10 min-h-10">{{ product.title }}</div>
        </div>
        <!--        TODO: Прокинуть объект в addToCart-->
        <div v-if="!isAddedToCart" class="bg-blue-300 rounded-xl" @click="addToCart(product)">
            <p class="text-center select-none">Добавить в корзину</p>
        </div>
        <div
            v-else
            class=" bg-blue-500 rounded-xl "
            @click="addToCart(product)">
            <p class="text-center select-none">{{ productCount }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useProductStore } from '@/stores/ProductStore'
import type { Product } from '@/models/Product'

const emit = defineEmits(['addedToCart'])

const props = defineProps({
    product: {
        type: Object as () => Product,
        required: true
    }
})

const productStore = useProductStore();
const isAddedToFavourites = ref<boolean>(false);
const cartString = localStorage.getItem('cart') || '[]';
const cart = ref<Product[]>(JSON.parse(cartString));
const currentProduct = productStore.getCurrentProduct(props.product as Product);
let index = cart._value?.findIndex(item => item.id === currentProduct?.id)
const productCount = ref<number>(cart?._value[index]?.count || 0);
const amountItemsInCart = ref(0);
const isAddedToCart = ref<boolean>(productCount.value > 0);

const addToCart = (product: Product) => {
    if (isAddedToCart.value) {
        productCount.value++;
        amountItemsInCart.value++

        index = cart._value?.findIndex(item => item.id === currentProduct?.id)
        cart._value[index].count = productCount.value

        localStorage.setItem('cart', JSON.stringify(cart.value));
        emit('addedToCart');
    }else{
        isAddedToCart.value = true;
        productCount.value++;
        amountItemsInCart.value++

        cart._value.push({ ...product, count: productCount.value });

        localStorage.setItem('cart', JSON.stringify(cart.value));

        emit('addedToCart');
    }

};

const toggleFavourites = (() => {
    isAddedToFavourites.value = !isAddedToFavourites.value
});

const usd2Rub = ((usdCost: number) => {
    return usdCost * 100;
});

</script>



<style scoped>
    div {
        font-weight: bold;
    }
</style>
