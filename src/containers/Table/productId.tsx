import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function ProductId() {
    const [form] = Form.useForm()
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        axios
            .get(`https://63ddd4289fa0d60060f59330.mockapi.io/product/${id}`)
            .then((response) => {
                form.setFieldValue('name', response.data.name),
                    form.setFieldValue('price', response.data.price),
                    form.setFieldValue('quantity', response.data.quantity)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const onFinish = async () => {
        const nameInput = form.getFieldValue('name')
        const priceInput = form.getFieldValue('price')
        const quantityInput = form.getFieldValue('quantity')
        await axios
            .put(`https://63ddd4289fa0d60060f59330.mockapi.io/product/${id}`, {
                name: nameInput,
                price: priceInput,
                quantity: quantityInput,
            })
            .then(function (response) {
                console.log('update oke', response.data)
                router.push('/product')
            })
            .catch((err) => {
                console.log(err)
            })
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
                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Price" name="price">
                    <Input />
                </Form.Item>
                <Form.Item label="Quantity" name="quantity">
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
