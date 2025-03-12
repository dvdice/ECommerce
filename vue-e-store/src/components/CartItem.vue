<template>
    <div>
        <div class="flex items-center border border-slate-200 p-4 rounded-xl mt-5">
            <img class="rounded-xl object-cover h-24" :src="product.images[0]">

            <div class="flex flex-col ml-5 overflow-hidden ">
                <p class="break-normal">{{ product.title }}</p>
                <div class="flex justify-between gap-3 overflow-hidden">
                    <b>{{ usd2Rub(product.price) * itemAmount}} ₽</b>
                    <input class="border pl-2" type="number" v-model="itemAmount" min="1" max="999" @change="changeCountInCart(product.id)">
                    <img class="opacity-50 hover:opacity-100 transition" src="/close.svg" @click="deleteItem(product.id)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/models/Product'
import { usd2Rub } from '@/components/ProductCard.vue'
import { ref } from 'vue'

const props = defineProps({
    product: {
        type: Object as () => Product,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})
const emit = defineEmits(['cartChanged'])

const itemAmount = ref<number>(props.amount);
const cartString = localStorage.getItem('cart') || '[]';
const cart = ref<Product[]>(JSON.parse(cartString));

const deleteItem = (id: number) => {
    const index = cart.value.findIndex(item => item.id == id)
    cart.value.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart.value));
    emit('cartChanged')
}
const changeCountInCart = (id: number) => {
    debugger
    const index = cart.value.findIndex(item => item.id == id)
    cart.value[index].count = itemAmount.value;
    localStorage.setItem('cart', JSON.stringify(cart.value));
    emit('cartChanged')
}

</script>

<style scoped>

</style>
