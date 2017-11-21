import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Modal, Input, message, Progress, Select } from 'antd'
import styles from '../components/layout/general.less'

class About extends React.Component {

    location = this.props.location
    state = {
        nameModalVisible: false,
        downloadVisible: false,
        downloadIndicatorVisible: false,
        name: 'MyRaspberryPi',
        nameInputValue: 'MyRaspberryPi'
    }

    showNameModal = () => {
        this.setState({
            nameModalVisible: true
        })
    }

    handleNameModalOk = (e) => {
        console.log(this.nameInput)
        this.setState({
            nameModalVisible: false,
            name: this.state.nameInputValue
        })
        message.success('Name successfully changed.')
    }

    handleNameModalCancel = (e) => {
        this.setState({
            nameModalVisible: false,
            nameInputValue: this.state.name
        })
    }

    nameInputOnChange = (e) => {
        this.setState({
            nameInputValue: e.target.value
        })
    }

    showDownload = () => {
        this.setState({
            downloadVisible: true
        })
    }

    handleDownloadAbort = (e) => {
        this.setState({
            downloadVisible: false,
            downloadIndicatorVisible: false
        })
        message.error('Download aborted.')
    }

    handleDownloadHide = (e) => {
        this.setState({
            downloadVisible: false,
            downloadIndicatorVisible: true
        })
    }

    render() {
        return (
            <div>
                <Row className={styles.title}>
                    <Col span={18}>About</Col>
                    <Col span={6} className={styles.control}>
                        <Progress 
                        type="circle" 
                        percent={45} 
                        width={48}
                        style={ this.state.downloadIndicatorVisible ? {} : {display: 'none'} }/>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>{this.state.name}</p>
                        <p className={styles.desc}>Raspberry Pi 3 Model B, 2017</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Button type="default" onClick={this.showNameModal}>Change Name</Button>
                        <Modal
                        title="Change Name"
                        visible={this.state.nameModalVisible}
                        onOk={this.handleNameModalOk}
                        onCancel={this.handleNameModalCancel}>
                            <p>Enter a new name for this Pi</p>
                            <Input
                            placeholder=""
                            ref={node => this.nameInput = node}
                            value={this.state.nameInputValue}
                            onChange={this.nameInputOnChange}
                            onPressEnter={this.handleNameModalOk}/>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Software Version</p>
                        <p className={styles.desc}>Raspbian 9.0.4</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Button type="default" onClick={this.showDownload}>Check Update</Button>
                        <Modal
                        title="Downloading"
                        visible={this.state.downloadVisible}
                        onOk={this.handleDownloadAbort}
                        onCancel={this.handleDownloadHide}
                        okText="Abort"
                        cancelText="Hide">
                            <Progress percent={45} status="active"/>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Automatic Update</p>
                        <p className={styles.desc}>Frequency of Raspberry Pi automatically check for update software</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Select defaultValue="2" style={{width: 120}}>
                            <Select.Option value="0">Never</Select.Option>
                            <Select.Option value="1">Once a day</Select.Option>
                            <Select.Option value="2">Once a week</Select.Option>
                            <Select.Option value="3">Once a month</Select.Option>
                        </Select>
                    </Col>
                </Row>
            </div>
        )
    }
}

About.propTypes = {
    location: PropTypes.object.isRequired
}

export default About