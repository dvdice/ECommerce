<template>
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>

    <div class="bg-white h-full fixed right-0 top-0 z-20 p-8 w-3/12">
        <div class="flex items-center gap-5">
            <svg class="cursor-pointer rotate-180 hover:opacity-70 transition" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H14.7143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="black" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
            </svg>
            <h2 class="text-2xl font-bold">Корзина</h2>
        </div>

        <cart-item></cart-item>
        <cart-item></cart-item>
        <cart-item></cart-item>

        <div class="mt-2">
            <div class="flex">
                <span>Итого:</span>
                <div class="flex-1"></div>
                <b>12990 ₽</b>
            </div>
            <div class="flex">
                <span>Доставка:</span>
                <div class="flex-1"></div>
                <b>350 ₽</b>
            </div>
            <button class="rounded-xl w-full mt-2 p-3 bg-lime-400 hover:bg-lime-200">Оформить заказ</button>
        </div>
    </div>
</template>

<script setup lang="ts">

import CartItem from '@/components/CartItem.vue'
</script>

<style scoped>

</style>
