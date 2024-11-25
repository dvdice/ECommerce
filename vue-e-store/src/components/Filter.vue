<template>
    <select class="py-2 px-3 border rounded-md">
        <option v-for="(option, index) in optionsList" :key="index">{{ option }}</option>
    </select>
</template>

<script setup lang="ts">
    defineProps({
        optionsList: {
            type: Array,
            default: () => ['По названию','По цене (дешевле)','По цене (дороже)']
        }
    })
</script>

<style scoped>

</style>
