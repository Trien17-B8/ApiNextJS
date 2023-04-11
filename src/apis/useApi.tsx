/* eslint-disable @typescript-eslint/no-inferrable-types */
import $axios from '@/service/axios'

interface Product {
    id: number
    title: string
    price: number
    description: string
}

const useApi = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    }

    return {
        getProducts: async () => {
            let data: string[] = []
            await $axios
                .get('products', config)
                .then((response) => {
                    data = response.data.products
                })
                .catch((error) => console.log(error))
            return data
        },

        getProductById: async (id: number) => {
            let data: string[] = []
            await $axios
                .get(`products/${id}`, config)
                .then((response) => {
                    data = response.data
                })
                .catch((error) => console.log(error))
            return data
        },

        createProduct: async (body?: Product) => {
            let success: boolean = false
            await $axios
                .post('product/add', body, config)
                .then(() => {
                    success = true
                })
                .catch((error) => console.log(error))
            return success
        },

        deleteProduct: async (id: number) => {
            let success: boolean = false
            await $axios
                .delete(`products/${id}`)
                .then(() => {
                    success = true
                })
                .catch((error) => console.log(error))
            return success
        },

        updateProduct: async (body?: Product, id?: number) => {
            let success: boolean = false
            await $axios
                .put(`products/${id}`, body, config)
                .then(() => {
                    success = true
                })
                .catch((error) => console.log(error))
            return success
        },
    }
}

export { useApi }
