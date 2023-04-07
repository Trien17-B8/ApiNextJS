import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { dataCategory } from '@/components/Table/data'
import TablesCategory from '@/components/Table/tableCategory'
import { Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/router'

interface DataType {
    key: string
    name: string
    type: string
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
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

const NewCategory: React.FC = () => {
    const [form] = Form.useForm()

    const onFinish = (e: Event) => {
        e.preventDefault
        console.log(e)
        dataCategory.push(form.getFieldsValue())
        console.log(dataCategory)
    }
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
                <Form.Item label="Key" name={'key'}>
                    <Input />
                </Form.Item>

                <Form.Item label="Name" name={'name'}>
                    <Input />
                </Form.Item>
                <Form.Item label="Type" name={'type'}>
                    <Input />
                </Form.Item>

                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <Table columns={columns} dataSource={dataCategory} />
        </>
    )
}

export default NewCategory
