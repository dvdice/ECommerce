<script lang="ts" setup>
    import {onMounted, ref} from "vue";
    import axios from "axios";

    import ProductCard from '@/components/ProductCard.vue'
    import Header from '@/components/Header.vue'
    import Drawer from '@/components/Drawer.vue'

    const items = ref([])

    onMounted(async () => {
        try {
            const {data} = await axios.get('https://fakestoreapi.com/products')
            items.value = data
        }catch (err){
            console.log(err)
        }
    })

    const usd2Rub = ((usdCost: number) => {
        return usdCost * 100;
    })
</script>
<template>
<!--    <drawer/>-->
    <div class="bg-white w-auto m-auto h-full rounded-xl shadow-xl mt-5">
        <Header/>
        <div class="p-10 flex flex-row flex-wrap gap-5">
            <product-card
                v-for="item in items"
                :key="item.id"
                :price="usd2Rub(item.price)"
                :product-name="item.title"
                :image="item.image"
            ></product-card>
            <product-card></product-card>
        </div>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
