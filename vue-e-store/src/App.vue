<template>
    <!--    <drawer/>-->
    <div class="bg-white w-auto m-auto h-full rounded-xl shadow-xl mt-5">
        <Header/>

        <div class="p-5">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold ml-5">Товары дня!</h1>

                <div class="flex items-center gap-4">
                    <Filter></Filter>

                    <div class="relative pr-5">
                        <img class="absolute left-3 top-2" src="/search.svg" alt="">
                        <input class="border border-gray-300 rounded-md py-1 pl-10 pr-4" placeholder="Поиск..." />
                    </div>
                </div>
            </div>


            <div class="p-10 flex flex-row flex-wrap gap-5">
                <product-card
                    v-for="item in items"
                    :key="item.id"
                    :price="usd2Rub(item.price)"
                    :product-name="item.title"
                    :image="item.images[0]"
                ></product-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import {onMounted, ref} from "vue";
    import axios from "axios";

    import ProductCard from '@/components/ProductCard.vue'
    import Header from '@/components/Header.vue'
    import Drawer from '@/components/Drawer.vue'
    import Filter from '@/components/Filter.vue'

    const items = ref([])

    onMounted(async () => {
        try {
            const {data} = await axios.get('https://api.escuelajs.co/api/v1/products')
            items.value = data
        }catch (err){
            console.log(err)
        }
    })

    const usd2Rub = ((usdCost: number) => {
        return usdCost * 100;
    })
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
