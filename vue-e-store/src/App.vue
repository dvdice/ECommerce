<script lang="ts" setup>
    import ProductCard from '@/components/ProductCard.vue'
    import Header from '@/components/Header.vue'
    import Drawer from '@/components/Drawer.vue'
</script>
<template>
<!--    <drawer/>-->
    <div class="bg-white w-auto m-auto h-screen  rounded-xl shadow-xl mt-5">
        <Header/>

        <div class="p-5">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold ml-5">Товары дня!</h1>

                <div class="flex items-center gap-4"><select class="py-2 px-3 border rounded-md">
                    <option>По названию</option>
                    <option>По цене (дешевле)</option>
                    <option>По цене (дороже)</option>
                </select>

                    <div class="relative pr-5">
                        <img class="absolute left-3 top-2" src="/search.svg" alt="">
                        <input class="border border-gray-300 rounded-md py-1 pl-10 pr-4" placeholder="Поиск..." />
                    </div>
                </div>
            </div>


            <div class="p-10 flex flex-row flex-wrap gap-5">
                <product-card price="150" product-name="ХУЙ"></product-card>
                <product-card price="150" product-name="ХУЙ"></product-card>
                <product-card price="150" product-name="ХУЙ"></product-card>
                <product-card price="150" product-name="ХУЙ"></product-card>
                <product-card price="150" product-name="ХУЙ"></product-card>
                <product-card price="150" product-name="ХУЙ"></product-card>
                <product-card price="150" product-name="ХУЙ"></product-card>
                <product-card price="150" product-name="ХУЙ"></product-card>
            </div>
        </div>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
