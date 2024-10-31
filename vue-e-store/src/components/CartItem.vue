<script setup lang="ts">
    const props = defineProps({
        productName: {
            type: String,
            default: 'asdfsddasdasdsadasdasdasd'
        },
        price: {
            type: Number,
            default: 21511
        },
    })
</script>

<template>
    <div>
        <div class="flex items-center border border-slate-200 p-4 rounded-xl mt-5">
            <img class="rounded-xl" src="http://dummyimage.com/100">

            <div class="flex flex-col ml-5">
                <p class="break-all">{{ productName }}</p>
                <div class="flex justify-between">
                    <b>{{ price }} ₽</b>
                    <img class="opacity-50 hover:opacity-100 transition" src="/close.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
