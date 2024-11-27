import { defineStore } from 'pinia'
import { ref } from 'vue'
export interface Product {
    id: number;
    price: number;
    count: number;
};
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
