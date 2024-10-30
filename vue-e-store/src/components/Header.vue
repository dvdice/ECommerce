<script setup lang="ts">

</script>

<template>
    <header class="flex justify-between border-b px-5 py-5 mb-10">
        <div class="flex items-center">
            <img class="w-10 mr-5" src="/logo.png" alt="logo" />
            <div>
                <h2 class="text-xl font-bold">XuyarketPlace</h2>
            </div>
        </div>
        <ul class="flex items-center">
            <li class="flex items-center cursor-pointer mr-5 hover:font-bold">
                <img class="mr-2" src="/cart.svg" alt="Корзина">
                <p>Корзина</p>
            </li>
            <li class="flex items-center cursor-pointer mr-5 hover:font-bold">
                <img class="mr-2" src="/heart.svg" alt="Закладки">
                <p>Закладки</p>
            </li>
            <li class="flex items-center cursor-pointer mr-5 hover:font-bold">
                <img class="mr-2" src="/profile.svg" alt="Профиль">
                <p>Профиль</p>
            </li>
        </ul>
    </header>
</template>

<style scoped>

</style>
