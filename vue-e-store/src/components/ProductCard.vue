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

import { type Product, useProductStore } from '@/stores/ProductStore'

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const productStore = useProductStore();
const isAddedToFavourites = ref(false);
const cartString = localStorage.getItem('cart') || '[]';
const cart = ref<CartItem[]>(JSON.parse(cartString));
const currentProduct = productStore.getCurrentProduct(props.product as Product);
const index = cart.value.findIndex(item => item.id === currentProduct?.id)
const productCount = ref(cart.value[index]?.count || 0);
const isAddedToCart = ref(productCount.value > 0);

const addToCart = (product: object) => {
    if (isAddedToCart.value) {
        productCount.value++;

        cart.value[index].count = productCount.value

        localStorage.setItem('cart', JSON.stringify(cart));
    }else{
        isAddedToCart.value = true;
        productCount.value++;

        const cartString = localStorage.getItem('cart') || '[]';
        const cart = JSON.parse(cartString);

        cart.push({ ...product, count: productCount.value });

        localStorage.setItem('cart', JSON.stringify(cart));
    }

};

const toggleFavourites = (() => {
    isAddedToFavourites.value = !isAddedToFavourites.value
});

const usd2Rub = ((usdCost: number) => {
    return usdCost * 100;
})

interface CartItem {
    id: number;
    count: number;
};

</script>



<style scoped>
    div {
        font-weight: bold;
    }
</style>
