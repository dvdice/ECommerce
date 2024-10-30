<script lang="ts" setup>
    import ProductCard from '@/components/ProductCard.vue'
    import Header from '@/components/Header.vue'
</script>
<template>
    <div class="bg-white w-auto m-auto h-screen  rounded-xl shadow-xl mt-5">
        <Header/>
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
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
