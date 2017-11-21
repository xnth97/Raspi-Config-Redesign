import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Modal, Input, message, Select, Switch } from 'antd'
import styles from '../components/layout/general.less'

class Booting extends React.Component {

    location = this.props.location

    state = {
        passwdModalVisible: false,
        passwdInputValue: '',
        loginSwitch: false
    }

    handleLoginSwitch = (e) => {
        if (e) {
            this.setState({
                passwdModalVisible: true
            })
        } else {
            this.setState({
                loginSwitch: e
            })
        }
    }

    handlePasswdModalOk = (e) => {
        if (this.state.passwdInputValue == '12345') {
            this.setState({
                passwdModalVisible: false,
                loginSwitch: true,
                passwdInputValue: ''
            })
            message.success('Auto login as user Pi is enabled.')
        } else {
            message.error('Authentication failed. Please try again.')
        }
    }

    handlePasswdModalCancel = (e) => {
        this.setState({
            passwdInputValue: '',
            passwdModalVisible: false
        })
    }

    handleInputChange = (e) => {
        this.setState({
            passwdInputValue: e.target.value
        })
    }

    handleSplashSwitch = (e) => {
        if (e) {
            message.success('Splash screen is now enabled.')
        } else {
            message.error('Splash screen is now disabled.')
        }
    }

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
                        <Switch checked={this.state.loginSwitch} onChange={this.handleLoginSwitch}/>
                    </Col>
                    <Modal
                    title="Authentication"
                    visible={this.state.passwdModalVisible}
                    onOk={this.handlePasswdModalOk}
                    onCancel={this.handlePasswdModalCancel}>
                        <p>Enter the password for user Pi. (For test: correct password is 12345)</p>
                        <Input
                        type="password"
                        onChange={this.handleInputChange}
                        value={this.state.passwdInputValue}
                        onPressEnter={this.handlePasswdModalOk}/>
                    </Modal>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Enable Splash Screen</p>
                        <p className={styles.desc}>Shows a splash screen during starting up instead of text information</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Switch defaultChecked={false} onChange={this.handleSplashSwitch}/>
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