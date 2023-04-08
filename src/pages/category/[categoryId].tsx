import React, { useState, useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { dataCategory } from '@/containers/Table/data'
import { Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/router'

const NewCategory: React.FC = () => {
    const routers = useRouter()
    const [category, setCategory] = useState(dataCategory)
    const [form] = Form.useForm()

    useEffect(() => {
        // setCategory(dataCategory)
        // dataCategory
        // form.setFieldValue('key', '122') detail
        console.log(category)
    }, [category])

    const onFinish = () => {
        const categoryValues = form.getFieldsValue()
        setCategory((category) => {
            return [...category, categoryValues]
        })
    }

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
                <Form.Item label="Key" name="key">
                    <Input />
                </Form.Item>

                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Type" name="type">
                    <Input />
                </Form.Item>

                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default NewCategory
