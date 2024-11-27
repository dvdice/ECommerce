<template>
    <ul class="flex items-center">
        <li v-for="(link, index) in headerLinkElements" :key="index" class="flex items-center cursor-pointer mr-5 hover:font-bold">
            <img class="mr-2" src="/cart.svg" alt="Корзина" >
            <p>Корзина</p>
        </li>
        <li class="flex items-center cursor-pointer mr-5 hover:font-bold">
            <img class="mr-2" src="/heart.svg" alt="Закладки">
            <p>Закладки</p>
        </li>
        <li class="flex items-center cursor-pointer mr-5 hover:font-bold">
            <img class="mr-2" src="/profile.svg" alt="Профиль">
            <p>Профиль</p>
        </li>
    </ul>
</template>

<script setup lang="ts">
    defineProps({
        headerLinkElements: {
            type: [Object, Array],
            required: true
        }
    })
</script>

<style scoped>

</style>
