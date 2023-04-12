import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { useApi } from '@/apis/useApi'
import { useRouter } from 'next/router'

const ProductId = () => {
    const api = useApi()
    const [form] = Form.useForm()
    const router = useRouter()
    const { id }: any = router.query

    useEffect(() => {
        const data = api.getProductById(id)
        {
            data.then((response) => {
                form.setFieldValue('id', response.id),
                    form.setFieldValue('title', response.title),
                    form.setFieldValue('price', response.price),
                    form.setFieldValue('description', response.description)
            })
        }
    }, [])

    const onFinish = async () => {
        const idInput = form.getFieldValue('id')
        const titleInput = form.getFieldValue('title')
        const priceInput = form.getFieldValue('price')
        const desInput = form.getFieldValue('description')

        const data = await api.updateProduct({
            id: idInput,
            title: titleInput,
            price: priceInput,
            description: desInput,
        })
        if (data) {
            alert('Update Product Success')
        } else {
            console.log('Update Product Fail')
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
