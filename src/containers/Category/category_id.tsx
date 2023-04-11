import React, { useState, useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { dataCategory } from './data'

const CategoryIdComponents: React.FC = () => {
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

export default CategoryIdComponents
