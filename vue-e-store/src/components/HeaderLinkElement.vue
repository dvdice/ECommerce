<template>
    <ul class="flex items-center">
        <li v-for="(link, index) in headerLinkElements" :key="index" @click="linkClick(link.title)" class="flex items-center cursor-pointer mr-5 hover:font-bold">
            <template v-if="link.title !== 'Корзина'">
                <img class="mr-2" :src="link.imgSrc" alt="Корзина" >
<!--                <p>{{ link.title }}</p>-->
            </template>
            <template v-else>
                <!-- TODO: Засунуть обертку и иконку внутрь -->
                <div class="relative">
                    <img class="mr-2" :src="link.imgSrc" alt="Корзина">
                    <badge :value="totalItemsInCart"/>
                </div>

            </template>

        </li>
    </ul>
</template>

<script setup lang="ts">
    import Badge from '@/components/Badge.vue'

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
