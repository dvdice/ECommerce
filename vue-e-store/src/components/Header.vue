<template>
    <header class="flex justify-between border-b p-5 mb-10">
        <div class="flex items-center">
            <img class="w-10 mr-5" src="/logo.png" alt="logo" />
            <div>
                <h2 class="text-xl font-bold">XuyarketPlace</h2>
            </div>
        </div>

        <header-link-element :header-link-elements="headerLinkElements" :total-items-in-cart="totalItemsInCart" @cart-clicked="cartClicked"></header-link-element>
    </header>
</template>

<script setup lang="ts">

import HeaderLinkElement from '@/components/HeaderLinkElement.vue'

defineProps({
    totalItemsInCart: {
        type: Number,
        default: 0
    }
})

const emit = defineEmits(['cartClicked'])

const headerLinkElements = [
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
