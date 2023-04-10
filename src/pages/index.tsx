import React, { useState } from 'react'
import { RightOutlined, LeftOutlined, HomeOutlined } from '@ant-design/icons'
import { Input, Layout, Menu, theme } from 'antd'
import { FiSettings } from '@react-icons/all-files/fi/FiSettings'
import { RiLayoutMasonryLine } from '@react-icons/all-files/ri/RiLayoutMasonryLine'
import { BsBellFill } from '@react-icons/all-files/bs/BsBellFill'
import { FaProductHunt } from '@react-icons/all-files/fa/FaProductHunt'
import { FaCertificate } from '@react-icons/all-files/fa/FaCertificate'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'
import Main from '@/layouts/Main/main'
import Link from 'next/link'

const { Header, Sider, Content } = Layout

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    const routes = useRouter()
    return (
        <Layout>
            <Sider
                style={{ backgroundColor: '#2c2c2c', height: '1250px' }}
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div className="logo" />
                <Menu
                    style={{ backgroundColor: '#2c2c2c' }}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Dashboard',
                        },
                        {
                            key: '2',
                            icon: <FaProductHunt />,
                            onClick: () => {
                                // console.log(111)
                                routes.push('/product')
                            },
                            label: 'Product',
                        },
                        {
                            key: '3',
                            icon: <FaCertificate />,
                            onClick: () => {
                                // console.log(111)
                                routes.push('/category')
                            },
                            label: 'Categories',
                        },
                    ]}
                />
            </Sider>
            <Layout className={styles.site_layout}>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    {React.createElement(
                        collapsed ? RightOutlined : LeftOutlined,
                        {
                            className: styles.trigger,
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                    <span className={styles.title}>Paper Dashboard 2 PRO</span>
                    <Input
                        className={styles.searchInput}
                        placeholder="Search"
                    />
                    <RiLayoutMasonryLine className={styles.icon} />
                    <BsBellFill className={styles.icon} />
                    <FiSettings className={styles.icon} />
                    <Link href={'/login'} className={styles.login}>
                        Đăng Nhập
                    </Link>
                </Header>
                <Content className={styles.content}>
                    <Main />
                </Content>
            </Layout>
        </Layout>
    )
}

export default App
