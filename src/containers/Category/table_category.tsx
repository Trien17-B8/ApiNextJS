import React, { useState, useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { dataCategory } from './data'
import { Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/router'

const NewCategory = () => {
    const routers = useRouter()
    const [category, setCategory] = useState(dataCategory)
    const [form] = Form.useForm()

    useEffect(() => {
        console.log(category)
    }, [category])

    const onFinish = () => {
        const categoryValues = form.getFieldsValue()
        setCategory((category) => {
            return [...category, categoryValues]
        })
        console.log(categoryValues)
    }

    const detailCategory = (record: any) => {
        setCategory((category) => {
            return category.filter((data) => {
                if (data.key === record.key) {
                    form.setFieldValue('key', data.key),
                        form.setFieldValue('name', data.name),
                        form.setFieldValue('type', data.type)
                }
                routers.push({
                    pathname: `/category/${data.key}`,
                })
            })
        })
    }

    const deleteCategory = (record: any) => {
        setCategory((category) => {
            return category.filter((data) => data.key !== record.key)
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

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button
                        onClick={() => {
                            detailCategory(record)
                        }}
                    >
                        Detail
                    </button>
                    <button
                        onClick={() => {
                            deleteCategory(record)
                        }}
                    >
                        <a>Delete</a>
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
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <Table columns={columns} dataSource={category} />
        </>
    )
}

export default NewCategory
