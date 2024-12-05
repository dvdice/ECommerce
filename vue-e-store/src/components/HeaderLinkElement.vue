<template>
    <ul class="flex items-center">
        <li v-for="(link, index) in headerLinkElements" :key="index" @click="linkClick(link.title)" class="flex items-center cursor-pointer mr-5 hover:font-bold">
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
    const emit = defineEmits(['cartClicked'])

    const linkClick = (title: string) => {
        switch (title){
            case 'Корзина':
                emit('cartClicked');
        }
    }
</script>

<style scoped>

</style>
