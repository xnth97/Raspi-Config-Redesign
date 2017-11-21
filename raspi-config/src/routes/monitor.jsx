import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'
import styles from '../components/layout/general.less'

const Monitor = ({ location }) => {
    return (
        <div>
            <Row>
                <p className={styles.title}>Monitor</p>
            </Row>
            <Row>
                
            </Row>
        </div>
    )
}

Monitor.propTypes = {
    location: PropTypes.object.isRequired
}

export default Monitor