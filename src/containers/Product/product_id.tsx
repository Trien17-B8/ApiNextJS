import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { useApi } from '@/apis/useApi'
import { useRouter } from 'next/router'
import axios from 'axios'

interface Product {
    id: number
    title: string
    price: number
    description: string
}

const ProductId: React.FC<Product> = () => {
    const router = useRouter()
    const { id } = router.query
    const api = useApi()
    const [form] = Form.useForm()

    useEffect(() => {
        // const router = useRouter()
        // const { id } = router.query
        // const data = api.getProductById(id)
        // if (data) {
        //     form.setFieldValue('id', data.data.id),
        //         form.setFieldValue('title', data.title),
        //         form.setFieldValue('price', response.data.price),
        //         form.setFieldValue('description', response.data.description)
        // }
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                form.setFieldValue('id', response.data.id),
                    form.setFieldValue('title', response.data.title),
                    form.setFieldValue('price', response.data.price),
                    form.setFieldValue('description', response.data.description)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const onFinish = async () => {
        const idInput = form.getFieldValue('id')
        const titleInput = form.getFieldValue('title')
        const priceInput = form.getFieldValue('price')
        const desInput = form.getFieldValue('description')

        const data = await api.createProduct({
            id: idInput,
            title: titleInput,
            price: priceInput,
            description: desInput,
        })
        if (data) {
            alert('Update Product Success')
        } else {
            console.log('Add Product Fail')
        }
    }

    return (
        <div>
            <Form
                form={form}
                onFinish={onFinish}
                name="wrap"
                labelCol={{ flex: '110px' }}
                labelAlign="left"
                labelWrap
                wrapperCol={{ flex: 1 }}
                colon={false}
                style={{ maxWidth: 600 }}
            >
                <Form.Item label="ID" name="id">
                    <Input />
                </Form.Item>
                <Form.Item label="Title" name="title">
                    <Input />
                </Form.Item>
                <Form.Item label="Price" name="price">
                    <Input />
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <Input />
                </Form.Item>

                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ProductId
