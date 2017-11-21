import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Modal, Input, message, Select, Switch } from 'antd'
import styles from '../components/layout/general.less'

class Interfacing extends React.Component {

    location = this.props.location

    render() {
        return (
            <div>
                <Row className={styles.title}>Interfacing</Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Remote Command Line (SSH)</p>
                        <p className={styles.desc}>To start SSH session to Pi, open terminal and type <code>ssh pi@10.0.0.2</code> then press return, or click the button below</p>
                        <p><Button>Start SSH session</Button></p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Switch defaultChecked={true}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Remote Graphical Desktop (VNC)</p>
                        <p className={styles.desc}>To start a remote desktop to Raspberry Pi, make an VNC connection to <code>vnc://10.0.0.2:1</code>, or click the button below</p>
                        <p><Button>Start VNC session</Button></p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Switch defaultChecked={true}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Camera</p>
                        <p className={styles.desc}>Camera is not connected to this Pi</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Switch defaultChecked={false} disabled={true}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

Interfacing.propTypes = {
    location: PropTypes.object.isRequired
}

export default Interfacing