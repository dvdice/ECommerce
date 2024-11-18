import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cartStore', () => {
    const cart = ref<object[]>([]);
    function addToCart(obj: object) {
        cart.value.push(obj)
    }
    return {
        cart,
        addToCart,
    };
})
