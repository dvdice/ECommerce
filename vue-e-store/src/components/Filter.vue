<template>
    <select class="py-2 px-3 border rounded-md h-9" v-model="selectedOption">
        <option v-for="(option, index) in optionsList" :key="index">{{ option }}</option>
    </select>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/ProductStore'
import { ref, watch } from 'vue'

defineProps({
    optionsList: {
        type: Array<string>,
        default: () => ['По названию', 'По цене (дешевле)', 'По цене (дороже)']
    }
})

const productStore = useProductStore();
const selectedOption = ref('');

watch(selectedOption, (newValue: string) => {
    switch (newValue) {
        case 'По названию':
            productStore.sortByAlphabet();
            break;
        case 'По цене (дешевле)':
            productStore.sortByPriceAsc();
            break;
        case 'По цене (дороже)':
            productStore.sortByPriceDesc();
            break;
    }
});

</script>

<style scoped>

</style>
