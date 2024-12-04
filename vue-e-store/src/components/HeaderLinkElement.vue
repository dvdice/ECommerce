<template>
    <ul class="flex items-center">
        <li v-for="(link, index) in headerLinkElements" :key="index" class="flex items-center cursor-pointer mr-5 hover:font-bold">
            <img class="mr-2" :src="link.imgSrc" alt="Корзина" >
            <p>{{ link.title === 'Корзина' ? 'Корзина ('+ totalItemsInCart + ')' : link.title }}</p>
        </li>
    </ul>
</template>

<script setup lang="ts">
    defineProps({
        headerLinkElements: {
            type: [Object, Array],
            required: true
        },
        totalItemsInCart: {
            type: Number,
            default: 0
        }
    })
</script>

<style scoped>

</style>
