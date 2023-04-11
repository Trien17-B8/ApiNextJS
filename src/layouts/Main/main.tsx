import React from 'react'
import { Col, Row } from 'antd'
import CardComponents from '@/containers/Card/card'
import ChardComponents from '@/containers/Chart/chart'
import styles from './styles.module.scss'
import StatisticComponents from '@/containers/Statistic/statistic'

export default function Main() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div>
                        <CardComponents />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <CardComponents />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <CardComponents />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <CardComponents />
                    </div>
                </Col>
            </Row>
            <br></br>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row">
                    <div className={styles.row}>
                        <ChardComponents />
                    </div>
                </Col>
            </Row>
            <br></br>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row">
                    <div className={styles.row}>
                        <StatisticComponents />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
