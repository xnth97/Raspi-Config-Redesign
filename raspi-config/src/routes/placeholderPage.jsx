import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Row, Col } from 'antd'
import styles from '../components/layout/general.less'

const PlaceholderPage = ({ location }) => {
    return (
        <div>
            <Row className={styles.title}>
                Under Construction
            </Row>
            <Row>
                <Col span={18} className={styles.option}>
                    <p className={styles.subtitle}>This page hasn't been implemented yet...</p>
                </Col>
            </Row>
        </div>
    )
}

PlaceholderPage.propTypes = {
    location: PropTypes.object.isRequired
}

export default PlaceholderPage