<template>
    <drawer
        v-if="cartToggled"
        @cart-clicked="cartToggled = !cartToggled"
    ></drawer>
    <div class="bg-white w-auto m-auto h-full rounded-xl shadow-xl mt-5">
        <Header :total-items-in-cart="totalItemsInCart" @cart-clicked="cartToggled = !cartToggled"/>

        <div class="p-5">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold ml-5">Товары дня!</h1>

                <div class="flex items-center gap-4">
                    <Filter></Filter>

                    <div class="relative pr-5">
                        <img class="absolute left-3 top-2" src="/search.svg" alt="">
                        <input class="border border-gray-300 rounded-md py-1 pl-10 pr-4 h-9" placeholder="Поиск..." />
                    </div>
                </div>
            </div>

            <div class="py-10 flex flex-row flex-wrap gap-10 justify-center">
                <product-card
                    v-for="item in productStore.productList"
                    :key="item.id"
                    :product="item"
                    @added-to-cart="totalItemsInCart++"
                ></product-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import ProductCard from '@/components/ProductCard.vue'
import Header from '@/components/Header.vue'
import Drawer from '@/components/Drawer.vue'
import Filter from '@/components/Filter.vue'
import { useProductStore } from '@/stores/ProductStore'
import type { Product } from '@/models/Product'

const productStore = useProductStore()
const cartString = localStorage.getItem('cart') || '[]';
const cart = ref<Product[]>(JSON.parse(cartString))
const cartToggled = ref<boolean>(false)

onMounted(async () => {
    try {
        const { data } = await axios.get('https://api.escuelajs.co/api/v1/products')
        productStore.productList = data
    } catch (err) {
        console.log(err)
    }
});

const getTotalItemsInCart = (cart: Product[]) => {
    return cart.reduce((count, item) => count + (item.count || 1), 0);
};
const totalItemsInCart = ref<number>(getTotalItemsInCart(cart?.value) as number);

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
