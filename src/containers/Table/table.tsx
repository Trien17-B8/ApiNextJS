import React from 'react'
import { Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { data } from './data'
import { useRouter } from 'next/router'
import { Button, Form, Input } from 'antd'

interface DataType {
    key: string
    name: string
    price: number
    quantity: number
}
const columns: ColumnsType<DataType> = [
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
                <a>Update</a>
                <a>Delete</a>
            </Space>
        ),
    },
]

const Tables: React.FC = () => {
    const routers = useRouter()
    return (
        <>
            <Form
                name="wrap"
                labelCol={{ flex: '110px' }}
                labelAlign="left"
                labelWrap
                wrapperCol={{ flex: 1 }}
                colon={false}
                style={{ maxWidth: 600 }}
            >
                <Form.Item label="Key" name="key">
                    <Input />
                </Form.Item>

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

export default Tables
