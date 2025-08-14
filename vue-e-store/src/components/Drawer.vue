<template>
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>

    <div class="bg-white h-full fixed right-0 top-0 z-20 p-8 w-3/12">
        <div class="flex items-center gap-5">
            <svg class="cursor-pointer rotate-180 hover:opacity-70 transition" width="16" height="14" viewBox="0 0 16 14"
                 fill="none" xmlns="http://www.w3.org/2000/svg" @click="emit('cartClicked')">
                <path d="M1 7H14.7143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="black" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
            </svg>
            <h2 class="text-2xl font-bold">Корзина</h2>
        </div>
        <template v-if="cart.length !== 0">
            <p>{{ cart.length }}</p>
            <cart-item
                v-for="item in cart"
                :key="item.id"
                :product="item"
                :amount="item.count"
                @delete-item="deleteItemFromCart"
                @cart-changed="cartChanged"
            ></cart-item>

            <div class="mt-2" v-if="cart.length < 2">
                <div class="flex">
                    <span>Итого:</span>
                    <div class="flex-1"></div>
                    <b>{{ usd2Rub(countTotalSum) }} ₽</b>
                </div>
                <div class="flex">
                    <span>Доставка:</span>
                    <div class="flex-1"></div>
                    <b>350 ₽</b>
                </div>
                <button class="rounded-xl w-full mt-2 p-3 bg-lime-400 hover:bg-lime-200">Оформить заказ</button>
            </div>
        </template>
        <template v-else>
            <div class="flex h-screen justify-center mt-52">
                <div class="text-center">
                    <p>К сожалению ваша корзина пуста</p>
                    <img class="m-auto" src="/emoji-2.png">
                    <p>Давайте скорее ее заполним!</p>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">

import CartItem from '@/components/CartItem.vue';
import { computed, reactive, ref } from 'vue'
import type { Product } from '@/models/Product';
import { usd2Rub } from '@/components/ProductCard.vue'

defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['cartClicked'])

let cartString = localStorage.getItem('cart') || '[]';
const cart = ref<Product[]>(JSON.parse(cartString));


const countTotalSum = computed(() => {
    return cart.value.reduce((sum, currentValue) => sum + (currentValue.price * currentValue.count), 0);
});

const deleteItemFromCart = (id: number) => {
    const index = cart.value.findIndex(item => item.id == id)
    cart.value.splice(index, 1)
}
const cartChanged = () => {
    cartString = localStorage.getItem('cart') || '[]';
    // Преобразуем каждый элемент в реактивный объект
    const parsedData = JSON.parse(cartString) as Product[];
    cart.value = parsedData.map(item => reactive(item));
}

</script>

<style scoped>

</style>
