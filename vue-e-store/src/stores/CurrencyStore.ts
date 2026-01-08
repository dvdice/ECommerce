import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCurrencyStore = defineStore('CurrencyStore', () => {
    const lastUpdated = ref<number>(Date.now());
    const loading = ref<boolean>(false);
    const error = ref<boolean>(false);

    const shouldUpdate = computed(() => {
        return true;
        if (!lastUpdated.value) return true;
        return Date.now() - lastUpdated.value > 86400000; // 24 часа
    });

    const dailyJson = fetchDailyJson();

    const getRubValue = (usdValue: number): number => {
        return dailyJson.Valute.USD.Value * usdValue
    }

    // TODO: Сделать перевод Любая валюта - рубль - любая валюта
    /*const convertToCurrency = (value): number => {
        return value
    }*/

    async function fetchDailyJson() {
        if (!shouldUpdate.value)
            return;

        loading.value = true;
        error.value = true;

        try {
            debugger
            const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
            lastUpdated.value = Date.now();
            return response;
        } catch (err) {
            error.value = true;
            console.error('Currency fetch error:', err);
        }
    }

    return {
        getRubValue
    }
});
