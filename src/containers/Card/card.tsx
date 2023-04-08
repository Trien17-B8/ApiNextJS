import { Card, Space } from 'antd'
import React from 'react'
import styles from './styles.module.scss'
import { AiOutlineGlobal } from '@react-icons/all-files/ai/AiOutlineGlobal'
import { GrUpdate } from '@react-icons/all-files/gr/GrUpdate'

const CardComponents: React.FC = () => (
    <Space direction="vertical" size={16}>
        <Card className={styles.card}>
            <div className={styles.top}>
                <div className={styles.img}>
                    <AiOutlineGlobal className={styles.icon} />
                </div>
                <div className={styles.title}>
                    <p className={styles.capacity}>Capacity</p>
                    <p className={styles.memory}>150GB</p>
                </div>
            </div>
            <hr className={styles.hr}></hr>
            <div className={styles.bottom}>
                <GrUpdate />
                <label className={styles.update}>Update Now</label>
            </div>
        </Card>
    </Space>
)

export default CardComponents
