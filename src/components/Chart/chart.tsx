import { Card, Space } from 'antd'
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import anh1 from './assets/anh1.png'
import anh2 from './assets/anh2.png'
import anh3 from './assets/anh3.png'

type Chart = {
    id: number
    img: any
    price: string
    title: string
    value: string
}

const Data: Chart[] = [
    {
        id: 1,
        img: anh1,
        price: '$34.657',
        title: 'TOTAL EARNINGS IN LAST TEN QUARTERS',
        value: 'Financial Statistics',
    },
    {
        id: 2,
        img: anh2,
        price: '169',
        title: 'TOTAL SUBSCRIPTIONS IN LAST 7 DAYS',
        value: 'View all members',
    },
    {
        id: 3,
        img: anh3,
        price: '8960',
        title: 'TOTAL DOWNLOADS IN LAST 6 YEARS',
        value: 'View more details',
    },
]

const ChardComponents: React.FC = () => (
    <div>
        {Data.map((data, index) => {
            return (
                <Space key={index} direction="vertical" size={16}>
                    <Card bordered={false} className={styles.Chart}>
                        <div className={styles.top}>
                            <label className={styles.price}>{data.price}</label>
                            <div className={styles.sales}>
                                <p className={styles.sale}>+18%</p>
                            </div>
                        </div>
                        <div>
                            <p className={styles.title}>{data.title}</p>
                            <Image
                                className={styles.img}
                                src={data.img}
                                alt=""
                            />
                        </div>
                        <hr></hr>
                        <div>{data.value}</div>
                    </Card>
                </Space>
            )
        })}
    </div>
)

export default ChardComponents
