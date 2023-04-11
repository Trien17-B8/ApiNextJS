import React, { useEffect, useState } from 'react'
import { Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Button, Form, Input } from 'antd'
import axios from 'axios'
import { useRouter } from 'next/router'

interface Product {
    key: string
    name: string
    price: number
    quantity: number
}

export default function TableProduct() {
    const [form] = Form.useForm()
    const [data, setData] = useState([])
    const router = useRouter()

    useEffect(() => {
        axios
            .get('https://63ddd4289fa0d60060f59330.mockapi.io/product')
            .then((response) => {
                // console.log(response.data)
                setData(response.data)
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
            .post('https://63ddd4289fa0d60060f59330.mockapi.io/product', {
                name: nameInput,
                price: priceInput,
                quantity: quantityInput,
            })
            .then(function (response) {
                console.log('oke', response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const detailProduct = (key: string) => {
        axios
            .get(`https://63ddd4289fa0d60060f59330.mockapi.io/product/${key}`)
            .then((response) => {
                router.push(`/product/${key}`)
                return console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteProduct = async (key: string) => {
        await axios
            .delete(
                `https://63ddd4289fa0d60060f59330.mockapi.io/product/${key}`
            )
            .then(function (response) {
                console.log('Delete', response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const columns: ColumnsType<Product> = [
        {
            title: 'Key',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button
                        onClick={() => {
                            detailProduct(record.key)
                        }}
                    >
                        Detail
                    </button>
                    <button
                        onClick={() => {
                            deleteProduct(record.key)
                        }}
                    >
                        Delete
                    </button>
                </Space>
            ),
        },
    ]
    return (
        <>
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
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Table columns={columns} dataSource={data} />
        </>
    )
}
