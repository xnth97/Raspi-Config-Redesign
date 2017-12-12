import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Modal, Input, message, Progress, Select } from 'antd'
import styles from '../components/layout/general.less'
import Guide from '../components/guide'

class About extends React.Component {

    location = this.props.location
    state = {
        nameModalVisible: false,
        downloadVisible: false,
        downloadIndicatorVisible: false,
        guidePageVisible: false,
        name: 'MyRaspberryPi',
        nameInputValue: 'MyRaspberryPi',
        downloadProgress: 0
    }

    showGuidePage = () => {
        this.setState({
            guidePageVisible: true
        })
    }

    handleGuideCancel = () => {
        this.setState({
            guidePageVisible: false
        })
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
            downloadProgress: 0,
            downloadVisible: true
        })
        for (var i = 0; i < 10; i ++) {
            setTimeout(() => {
                if (this.state.downloadProgress >= 100) {
                    return
                }
                this.setState({
                    downloadProgress: this.state.downloadProgress + 10
                })
                if (this.state.downloadProgress == 100) {
                    this.setState({
                        downloadVisible: false
                    })
                    message.success('Download complete. Ready to install the system update.')
                }
            }, 500 * i)
        }
    }

    handleDownloadAbort = (e) => {
        this.setState({
            downloadVisible: false,
            downloadIndicatorVisible: false,
            downloadProgress: 0
        })
        message.error('Download aborted.')
    }

    handleDownloadHide = (e) => {
        this.setState({
            downloadVisible: false,
            downloadIndicatorVisible: true
        })
    }

    openDocumentation = () => {
        window.open('https://www.raspberrypi.org/documentation/')
    }

    render() {
        return (
            <div>
                <Row className={styles.title}>
                    <Col span={18}>About</Col>
                    <Col span={6} className={styles.control}>
                        <Progress 
                        type="circle" 
                        percent={this.state.downloadProgress} 
                        width={42}
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
                            <Progress percent={this.state.downloadProgress} status="active"/>
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
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Guide</p>
                        <p className={styles.desc}>Show the guide page of Raspi-config</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Button onClick={this.showGuidePage}>Show Guide Page</Button>
                        <Modal
                        title='Guide to Raspi-config'
                        visible={this.state.guidePageVisible}
                        width='60vw'
                        onCancel={this.handleGuideCancel}
                        footer={null}>
                            <Guide/>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Documentation</p>
                        <p className={styles.desc}>Read the full documentation of Raspberry Pi</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Button onClick={this.openDocumentation}>Documentation</Button>
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