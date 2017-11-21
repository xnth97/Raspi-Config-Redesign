import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Modal, Input, message, Select, Switch } from 'antd'
import styles from '../components/layout/general.less'

class Booting extends React.Component {
    render() {
        return (
            <div>
                <Row className={styles.title}>Booting</Row>
                <Row>
                    <Col span={24} className={styles.option}>
                        <p className={styles.subtitle}>Start up Raspberry Pi into</p>
                    </Col>
                    
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Auto Login as "Pi"</p>
                        <p className={styles.desc}>You will automatically log in as user "Pi" after starting up</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Switch defaultChecked={false}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Enable Splash Screen</p>
                        <p className={styles.desc}>Shows a splash screen during starting up instead of text information</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Switch defaultChecked={false}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

Booting.propTypes = {
    location: PropTypes.object.isRequired
}

export default Booting