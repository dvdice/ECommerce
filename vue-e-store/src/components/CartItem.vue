<template>
    <div>
        <div class="flex items-center border border-slate-200 p-4 rounded-xl mt-5">
            <img class="rounded-xl object-cover h-24" :src="product.images[0]">

            <div class="flex flex-col ml-5">
                <p class="break-all">{{ product.title }}</p>
                <div class="flex justify-between">
                    <b>{{ product.price }} ₽</b>
                    <input type="number" :value="amount" min="1" max="999">
                    <img class="opacity-50 hover:opacity-100 transition" src="/close.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/models/Product'

defineProps({
    product: {
        type: Object as () => Product,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})
</script>


<style scoped>

</style>
