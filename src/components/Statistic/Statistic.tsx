import { Card, Space } from 'antd'
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import anh1 from './assets/anh1.png'
import anh2 from './assets/anh2.png'
import anh3 from './assets/anh3.png'
import anh4 from './assets/anh4.png'

type Chart = {
    id: number
    img: any
    name: string
    info: string
    status: string
    title: string
}

const Data: Chart[] = [
    {
        id: 1,
        img: anh1,
        name: 'Email Statistics',
        info: 'Last Campaign Performance',
        status: 'Open',
        title: ' Number of emails sent',
    },
    {
        id: 2,
        img: anh2,
        name: 'New Visitators',
        info: 'Out Of Total Number',
        status: 'Visited',
        title: ' Campaign sent 2 days ago',
    },
    {
        id: 3,
        img: anh3,
        name: 'Orders',
        info: 'Total Number',
        status: 'Completed',
        title: ' Updated 3 minutes ago',
    },
    {
        id: 4,
        img: anh4,
        name: 'Subscriptions',
        info: 'Our Users',
        status: 'Ended',
        title: ' Total users',
    },
]

const StatisticComponents: React.FC = () => (
    <div>
        {Data.map((data, index) => {
            return (
                <Space key={index} direction="vertical" size={16}>
                    <Card bordered={false} className={styles.Chart}>
                        <div className={styles.top}>
                            <p className={styles.name}>{data.name}</p>
                        </div>
                        <div>
                            <p className={styles.info}>{data.info}</p>
                            <Image
                                className={styles.img}
                                src={data.img}
                                alt=""
                            />
                            <p className={styles.status}>{data.status}</p>
                        </div>
                        <hr></hr>
                        <div>{data.title}</div>
                    </Card>
                </Space>
            )
        })}
    </div>
)

export default StatisticComponents
