import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import styled from './styles.module.scss'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

interface Login {
    data: {
        user: string
        password: string
    }[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:3001/account')
    const data = await res.json()
    return {
        props: {
            data,
        },
    }
}

export default function Login({ data }: Login) {
    console.log(data)

    const [form] = Form.useForm()
    const routers = useRouter()

    const onFinish = () => {
        const inputUser: string = form.getFieldValue('user')
        const inputPass: string = form.getFieldValue('password')

        {
            data.map((ac) => {
                const password = ac.password
                const user = ac.user
                if (password === inputPass && user === inputUser) {
                    routers.push('/product')
                } else {
                    console.log('Login failed')
                }
            })
        }
    }

    return (
        <Form
            form={form}
            className={styled.login}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <h1 className={styled.title}>Login</h1>

            <Form.Item
                label="Username"
                name="user"
                rules={[
                    { required: true, message: 'Please input your username!' },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button
                    className={styled.cancel}
                    onClick={() => {
                        routers.push('/')
                    }}
                >
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    )
}
