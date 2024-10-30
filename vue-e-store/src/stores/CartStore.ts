import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cartStore', () => {
    const cart = ref<Object[]>([]);
    function addToCart(obj: Object) {
        cart.value.push(obj)
    }
    return {
        cart,
        addToCart,
    };
})
