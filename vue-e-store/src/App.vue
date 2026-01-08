<template>
    <drawer
        v-if="cartToggled"
        @cart-clicked="cartToggled = !cartToggled"
    ></drawer>
    <div class="bg-white w-auto m-auto h-full rounded-xl shadow-xl mt-5">
        <Header
            :total-items-in-cart
            @cart-clicked="cartToggled = !cartToggled"
        ></Header>

        <div class="p-5">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold ml-5">Товары дня!</h1>

                <div class="flex items-center gap-4">
                    <Filter/>

                    <div class="relative pr-5">
                        <img class="absolute left-3 top-2" src="/search.svg" alt="">
                        <input
                            v-model="searchValue"
                            class="border border-gray-300 rounded-md py-1 pl-10 pr-4 h-9"
                            placeholder="Поиск..."
                            @input="searchChanged(searchValue)"
                        >
                    </div>
                </div>
            </div>

            <div class="py-10 flex flex-row flex-wrap gap-10 justify-center">
                <product-card
                    v-for="item in productList"
                    :key="item.id"
                    :product="item"
                    @added-to-cart="totalItemsInCart++"
                ></product-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import Header from '@/components/Header.vue'
import Drawer from '@/components/Drawer.vue'
import Filter from '@/components/Filter.vue'
import { useProductStore } from '@/stores/ProductStore'
import type { Product } from '@/models/Product'

import _ from 'lodash'

const productStore = useProductStore()
const productList = ref<Product[]>([])
const cartString = localStorage.getItem('cart') || '[]';
const cart = ref<Product[]>(JSON.parse(cartString))
const cartToggled = ref<boolean>(false)
const searchValue = ref<string>('')

onMounted(async () => {
    try {
        productStore.productList = data
        productList.value = productStore.productList
    } catch (err) {
        console.log(err)
    }
});

const getTotalItemsInCart = (cart: Product[]) => {
    return cart.reduce((count, item) => count + (item.count || 1), 0);
};

const totalItemsInCart = ref<number>(getTotalItemsInCart(cart?.value) as number);

// TODO: перестал работать после добавления debounce
const searchChanged = (searchStr: string) => _.debounce(() => {
    productList.value = productStore.productList.filter(item => item.title.toLowerCase().includes(searchStr));
},100);

const data = [
    {
        "id": 17,
        "title": "Classic Black T-Shirt",
        "slug": "classic-black-t-shirt",
        "price": 35,
        "description": "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
        "category": {
            "id": 1,
            "name": "Clothes",
            "slug": "clothes",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/9DqEOV5.jpeg",
            "https://i.imgur.com/ae0AEYn.jpeg",
            "https://i.imgur.com/mZ4rUjj.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 19,
        "title": "Sleek Wireless Headphone & Inked Earbud Set",
        "slug": "sleek-wireless-headphone-inked-earbud-set",
        "price": 44,
        "description": "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
        "category": {
            "id": 2,
            "name": "Electronics",
            "slug": "electronics",
            "image": "https://i.imgur.com/ZANVnHE.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/yVeIeDa.jpeg",
            "https://i.imgur.com/jByJ4ih.jpeg",
            "https://i.imgur.com/KXj6Tpb.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 23,
        "title": "Sleek Modern Laptop with Ambient Lighting",
        "slug": "sleek-modern-laptop-with-ambient-lighting",
        "price": 43,
        "description": "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
        "category": {
            "id": 2,
            "name": "Electronics",
            "slug": "electronics",
            "image": "https://i.imgur.com/ZANVnHE.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/OKn1KFI.jpeg",
            "https://i.imgur.com/G4f21Ai.jpeg",
            "https://i.imgur.com/Z9oKRVJ.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 25,
        "title": "Stylish Red & Silver Over-Ear Headphones",
        "slug": "stylish-red-silver-over-ear-headphones",
        "price": 39,
        "description": "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
        "category": {
            "id": 2,
            "name": "Electronics",
            "slug": "electronics",
            "image": "https://i.imgur.com/ZANVnHE.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/YaSqa06.jpeg",
            "https://i.imgur.com/isQAliJ.jpeg",
            "https://i.imgur.com/5B8UQfh.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 26,
        "title": "Sleek Mirror Finish Phone Case",
        "slug": "sleek-mirror-finish-phone-case",
        "price": 27,
        "description": "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
        "category": {
            "id": 2,
            "name": "Electronics",
            "slug": "electronics",
            "image": "https://i.imgur.com/ZANVnHE.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/yb9UQKL.jpeg",
            "https://i.imgur.com/m2owtQG.jpeg",
            "https://i.imgur.com/bNiORct.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 27,
        "title": "Sleek Smartwatch with Vibrant Display",
        "slug": "sleek-smartwatch-with-vibrant-display",
        "price": 16,
        "description": "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
        "category": {
            "id": 2,
            "name": "Electronics",
            "slug": "electronics",
            "image": "https://i.imgur.com/ZANVnHE.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/LGk9Jn2.jpeg",
            "https://i.imgur.com/1ttYWaI.jpeg",
            "https://i.imgur.com/sPRWnJH.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 28,
        "title": "Sleek Modern Leather Sofa",
        "slug": "sleek-modern-leather-sofa",
        "price": 53,
        "description": "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
        "category": {
            "id": 3,
            "name": "Furniture",
            "slug": "furniture",
            "image": "https://i.imgur.com/Qphac99.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/Qphac99.jpeg",
            "https://i.imgur.com/dJjpEgG.jpeg",
            "https://i.imgur.com/MxJyADq.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 29,
        "title": "Mid-Century Modern Wooden Dining Table",
        "slug": "mid-century-modern-wooden-dining-table",
        "price": 24,
        "description": "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
        "category": {
            "id": 3,
            "name": "Furniture",
            "slug": "furniture",
            "image": "https://i.imgur.com/Qphac99.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/DMQHGA0.jpeg",
            "https://i.imgur.com/qrs9QBg.jpeg",
            "https://i.imgur.com/XVp8T1I.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 30,
        "title": "Elegant Golden-Base Stone Top Dining Table",
        "slug": "elegant-golden-base-stone-top-dining-table",
        "price": 66,
        "description": "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
        "category": {
            "id": 3,
            "name": "Furniture",
            "slug": "furniture",
            "image": "https://i.imgur.com/Qphac99.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/NWIJKUj.jpeg",
            "https://i.imgur.com/Jn1YSLk.jpeg",
            "https://i.imgur.com/VNZRvx5.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 31,
        "title": "Modern Elegance Teal Armchair",
        "slug": "modern-elegance-teal-armchair",
        "price": 25,
        "description": "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
        "category": {
            "id": 3,
            "name": "Furniture",
            "slug": "furniture",
            "image": "https://i.imgur.com/Qphac99.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/6wkyyIN.jpeg",
            "https://i.imgur.com/Ald3Rec.jpeg",
            "https://i.imgur.com/dIqo03c.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 36,
        "title": "Rainbow Glitter High Heels",
        "slug": "rainbow-glitter-high-heels",
        "price": 39,
        "description": "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
        "category": {
            "id": 4,
            "name": "Shoes",
            "slug": "shoes",
            "image": "https://i.imgur.com/qNOjJje.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/62gGzeF.jpeg",
            "https://i.imgur.com/5MoPuFM.jpeg",
            "https://i.imgur.com/sUVj7pK.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 37,
        "title": "Chic Summer Denim Espadrille Sandals",
        "slug": "chic-summer-denim-espadrille-sandals",
        "price": 33,
        "description": "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
        "category": {
            "id": 4,
            "name": "Shoes",
            "slug": "shoes",
            "image": "https://i.imgur.com/qNOjJje.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/9qrmE1b.jpeg",
            "https://i.imgur.com/wqKxBVH.jpeg",
            "https://i.imgur.com/sWSV6DK.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 38,
        "title": "Vibrant Runners: Bold Orange & Blue Sneakers",
        "slug": "vibrant-runners-bold-orange-blue-sneakers",
        "price": 27,
        "description": "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
        "category": {
            "id": 4,
            "name": "Shoes",
            "slug": "shoes",
            "image": "https://i.imgur.com/qNOjJje.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/hKcMNJs.jpeg",
            "https://i.imgur.com/NYToymX.jpeg",
            "https://i.imgur.com/HiiapCt.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 39,
        "title": "Vibrant Pink Classic Sneakers",
        "slug": "vibrant-pink-classic-sneakers",
        "price": 84,
        "description": "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
        "category": {
            "id": 4,
            "name": "Shoes",
            "slug": "shoes",
            "image": "https://i.imgur.com/qNOjJje.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/mcW42Gi.jpeg",
            "https://i.imgur.com/mhn7qsF.jpeg",
            "https://i.imgur.com/F8vhnFJ.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 40,
        "title": "Futuristic Silver and Gold High-Top Sneaker",
        "slug": "futuristic-silver-and-gold-high-top-sneaker",
        "price": 68,
        "description": "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
        "category": {
            "id": 4,
            "name": "Shoes",
            "slug": "shoes",
            "image": "https://i.imgur.com/qNOjJje.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/npLfCGq.jpeg",
            "https://i.imgur.com/vYim3gj.jpeg",
            "https://i.imgur.com/HxuHwBO.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 41,
        "title": "Futuristic Chic High-Heel Boots",
        "slug": "futuristic-chic-high-heel-boots",
        "price": 36,
        "description": "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
        "category": {
            "id": 4,
            "name": "Shoes",
            "slug": "shoes",
            "image": "https://i.imgur.com/qNOjJje.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/HqYqLnW.jpeg",
            "https://i.imgur.com/RlDGnZw.jpeg",
            "https://i.imgur.com/qa0O6fg.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    },
    {
        "id": 42,
        "title": "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
        "slug": "elegant-patent-leather-peep-toe-pumps",
        "price": 53,
        "description": "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
        "category": {
            "id": 4,
            "name": "Shoes",
            "slug": "shoes",
            "image": "https://i.imgur.com/qNOjJje.jpeg",
            "creationAt": "2025-10-26T20:09:12.000Z",
            "updatedAt": "2025-10-26T20:09:12.000Z"
        },
        "images": [
            "https://i.imgur.com/AzAY4Ed.jpeg",
            "https://i.imgur.com/umfnS9P.jpeg",
            "https://i.imgur.com/uFyuvLg.jpeg"
        ],
        "creationAt": "2025-10-26T20:09:12.000Z",
        "updatedAt": "2025-10-26T20:09:12.000Z"
    }
    ]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
