import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '@/models/Product'

export const useProductStore = defineStore('productStore', () => {
    const productList = ref<Product[]>([]);
    function getCurrentProduct(obj: Product) {
        return productList.value.find(item => item.id === obj.id)
    }

    return {
        productList,
        getCurrentProduct,
    };
})
