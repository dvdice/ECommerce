import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '@/models/Product'

export const useProductStore = defineStore('productStore', () => {
    const productList = ref<Product[]>([]);
    function getCurrentProduct(obj: Product) {
        return productList.value.find(item => item.id === obj.id)
    }

    function sortByAlphabet() {
        productList.value.sort((a, b) => a.title.localeCompare(b.title));
    }
    function sortByPriceAsc() {
        productList.value.sort((a, b) => a.price > b.price ? 1 : -1);
    }
    function sortByPriceDesc() {
        productList.value.sort((a, b) => a.price < b.price ? 1 : -1);
    }

    return {
        productList,
        getCurrentProduct,
        sortByAlphabet,
        sortByPriceAsc,
        sortByPriceDesc
    };
})
