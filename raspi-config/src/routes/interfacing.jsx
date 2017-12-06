import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Modal, Input, message, Select, Switch } from 'antd'
import styles from '../components/layout/general.less'

class Interfacing extends React.Component {

    location = this.props.location

    state = {
        sshBtnEnable: true,
        vncBtnEnable: true
    }

    handleSSHSwitch = (e) => {
        this.setState({
            sshBtnEnable: e
        })
    }

    handleVNCSwitch = (e) => {
        this.setState({
            vncBtnEnable: e
        })
    }

    startSSH = (e) => {
        message.success('Successfully started an SSH session.')
    }

    startVNC = (e) => {
        message.success('Successfully started an VNC session.')
    }

    render() {
        return (
            <div>
                <Row className={styles.title}>Interfacing</Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Remote Command Line (SSH)</p>
                        <p className={styles.desc}>To start an <a href="javascript:window.open('https://en.wikipedia.org/wiki/Secure_Shell')">SSH</a> session to Pi, open terminal and type <code>ssh pi@10.0.0.2</code> then press return, or click the button below</p>
                        <p><Button disabled={!this.state.sshBtnEnable} onClick={this.startSSH}>Start SSH session</Button></p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Switch defaultChecked={true} onChange={this.handleSSHSwitch}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Remote Graphical Desktop (VNC)</p>
                        <p className={styles.desc}>To start an <a href="javascript:window.open('https://en.wikipedia.org/wiki/Virtual_Network_Computing')">VNC</a> connection to Raspberry Pi, make an VNC connection to <code>vnc://10.0.0.2:1</code>, or click the button below</p>
                        <p><Button disabled={!this.state.vncBtnEnable} onClick={this.startVNC}>Start VNC session</Button></p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Switch defaultChecked={true} onChange={this.handleVNCSwitch}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Camera</p>
                        <p className={styles.desc}>Camera is not connected to this Pi. If you have a compatible camera, please connect it to the proper physical interface of this Raspberry Pi under the manufacturer's instruction.</p>
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