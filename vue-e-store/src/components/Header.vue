<template>
    <header class="flex justify-between border-b p-5 mb-10">
        <div class="flex items-center">
            <img class="w-10 mr-5" src="/logo.png" alt="logo" />
            <div>
                <h2 class="text-xl font-bold">MarketPlace</h2>
            </div>
        </div>

        <currency-select></currency-select>

        <header-link-element
            :header-link-elements
            :total-items-in-cart
            @cart-clicked="cartClicked"
        ></header-link-element>
    </header>
</template>

<script setup lang="ts">

import HeaderLinkElement from '@/components/HeaderLinkElement.vue'
import CurrencySelect from '@/components/CurrencySelect.vue'
import { useCurrencyStore } from '@/stores/CurrencyStore';

defineProps({
    totalItemsInCart: {
        type: Number,
        default: 0
    }
})

const emit = defineEmits(['cartClicked'])

const currencyStore = useCurrencyStore();

const headerLinkElements = [
    {title: '', imgSrc: '/flag-usa.svg'},
    {title: 'Корзина', imgSrc: '/cart.svg'},
    {title: 'Закладки', imgSrc: '/heart.svg'},
    {title: 'Профиль', imgSrc: '/profile.svg'}
]
const cartClicked = () => {
    emit('cartClicked')
}
</script>

<style scoped>

</style>
