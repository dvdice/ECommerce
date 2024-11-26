<template>
    <div class="w-56 rounded-xl relative hover:shadow-xl transition hover:-translate-y-1 flex flex-col bg-gray-50">
        <img v-if="!isAddedToFavourites" class="ml-2 absolute top-1 right-1" src="/like-1.svg" @click="toggleFavourites()">
        <img v-if="isAddedToFavourites" class="ml-2 absolute top-1 right-1" src="/like-2.svg" @click="toggleFavourites()">
        <img class="rounded-xl min-h-56 min-w-56 self-center object-cover" :src="image">
        <div class="flex flex-col mt-1">
            <div class="ml-2 text-emerald-500">{{ price }} ₽</div>
            <div class="ml-2 leading-5 overflow-hidden max-h-10 min-h-10">{{ productName }}</div>
        </div>
        <!--        TODO: Прокинуть объект в addToCart-->
        <div v-if="!isAddedToCart" class="bg-blue-300 rounded-xl" @click="addToCart()">
            <p class="text-center select-none">Добавить в корзину</p>
        </div>
        <div
            v-else
            class=" bg-blue-500 rounded-xl "
            @click="productCount++">
            <p class="text-center select-none">{{ productCount }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/CartStore'

defineProps({
    productName: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: 'http://dummyimage.com/200'
    }
})

const isAddedToCart = ref(false);
const isAddedToFavourites = ref(false);
const productCount = ref(0);
const cartStore = useCartStore();

const addToCart = (() => {
    isAddedToCart.value = true
    productCount.value++
    cartStore.addToCart({'productCount': productCount})
});

const toggleFavourites = (() => {
    isAddedToFavourites.value = !isAddedToFavourites.value

});

</script>



<style scoped>
    div {
        font-weight: bold;
    }
</style>
