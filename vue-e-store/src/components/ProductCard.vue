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

const isAdded = ref(false)
const productCount = ref(0);
const cartStore = useCartStore()

const addToCart = (() => {
    isAdded.value = true
    productCount.value++
    cartStore.addToCart({'productCount': productCount})
})

</script>

<template>
    <div class="ml-4 w-56 rounded-xl relative hover:shadow-xl transition hover:-translate-y-1 flex flex-col bg-gray-50">
        <img class="ml-2 absolute top-1 right-1" src="/like-1.svg">
        <img class="rounded-xl h-48 w-48 self-center" :src="image">
        <div class="flex flex-col mt-1">
            <div class="ml-2 text-emerald-500">{{ price }} ₽</div>
            <div class="ml-2">{{ productName }}</div>
        </div>
<!--        TODO: Прокинуть объект в addToCart-->
        <div v-if="!isAdded" class=" bg-blue-500 rounded-xl" @click="addToCart()">
            <p class="text-center">Добавить в корзину</p>
        </div>
        <div
            v-else
            class=" bg-blue-500 rounded-xl "
            @click="productCount++">
            <p class="text-center">{{ productCount }}</p>
        </div>
    </div>
</template>

<style scoped>
    div {
        font-weight: bold;
    }
</style>
