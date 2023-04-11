import React, { useEffect, useState } from 'react'
import { useApi } from '@/apis/useApi'
import { Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Button, Form, Input } from 'antd'
import axios from 'axios'
import { useRouter } from 'next/router'

interface Product {
    id: number
    title: string
    price: number
    description: string
}

const TableProduct = () => {
    const [form] = Form.useForm()
    const [dataProduct, setDataProduct] = useState([])
    const router = useRouter()
    const api = useApi()

    useEffect(() => {
        const getProducts = async () => {
            const data: any = await api.getProducts()
            setDataProduct(data)
        }
        getProducts()
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
            alert('Add Product Success')
        } else {
            console.log('Add Product Fail')
        }
    }

    const detailProduct = async (id: number) => {
        const detail = await api.getProductById(id)
        if (detail) {
            router.push(`/product/${id}`)
        } else {
            return detail
        }
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                router.push(`/product/${id}`)
                return console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteProduct = async (id: number) => {
        const remove = await api.deleteProduct(id)
        if (remove) {
            alert('Delete Product Success')
            console.log('oke')
        } else {
            alert('Delete Product Fail')
        }
    }

    const columns: ColumnsType<Product> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button
                        onClick={() => {
                            detailProduct(record.id)
                        }}
                    >
                        Detail
                    </button>
                    <button
                        onClick={() => {
                            deleteProduct(record.id)
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
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Table columns={columns} dataSource={dataProduct} />
        </>
    )
}

export default TableProduct
