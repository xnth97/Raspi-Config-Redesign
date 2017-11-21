import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Modal, Input, message, Select, Switch } from 'antd'
import styles from '../components/layout/general.less'

class Advanced extends React.Component {
    location = this.props.location
    state = {
        expandFsState: false,
        warnModalVisible: false
    }

    expandFsChanged = (e) => {
        if (e) {
            this.setState({
                warnModalVisible: true
            })
        } else {
            this.setState({
                expandFsState: false
            })
        }
    }

    handleWarnOk = (e) => {
        this.setState({
            expandFsState: true,
            warnModalVisible: false
        })
    }

    handleWarnCancel = (e) => {
        this.setState({
            warnModalVisible: false
        })
    }

    render() {
        return (
            <div>
                <Row className={styles.title}>Advanced</Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Expand Filesystem</p>
                        <p className={styles.desc}>Ensure that all of the SD card storage is available</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Switch
                        checked={this.state.expandFsState}
                        onChange={this.expandFsChanged}
                        />
                        <Modal
                        title="Confirm"
                        visible={this.state.warnModalVisible}
                        onOk={this.handleWarnOk}
                        onCancel={this.handleWarnCancel}
                        okText="Confirm"
                        >
                            <p>Are you sure you want to expand your filesystem?</p>
                            <p>This operation cannot be revoked.</p>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Memory Split</p>
                        <p className={styles.desc}>Change the amount of memory available to the GPU</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Select defaultValue="128 MB" style={{width: 120}}>
                            <Select.Option value="16 MB">16 MB</Select.Option>
                            <Select.Option value="32 MB">32 MB</Select.Option>
                            <Select.Option value="64 MB">64 MB</Select.Option>
                            <Select.Option value="128 MB">128 MB</Select.Option>
                            <Select.Option value="256 MB">256 MB</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Audio Output</p>
                        <p className={styles.desc}>Force audio out through HDMI or 3.5mm jack</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Select defaultValue="HDMI" style={{width: 120}}>
                            <Select.Option value="HDMI">HDMI</Select.Option>
                            <Select.Option value="3.5mm">3.5mm jack</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Resolution</p>
                        <p className={styles.desc}>Set a specific screen resolution</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Select defaultValue="1080p" style={{width: 120}}>
                            <Select.Option value="480p">720 x 480</Select.Option>
                            <Select.Option value="576p">1024 x 576</Select.Option>
                            <Select.Option value="720p">1280 x 720</Select.Option>
                            <Select.Option value="900p">1600 x 900</Select.Option>
                            <Select.Option value="1080p">1920 x 1080</Select.Option>
                            <Select.Option value="4k">3840 x 2160</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>GL Driver</p>
                        <p className={styles.desc}>Enable the experimental Open GL driver</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Switch defaultChecked={false}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

Advanced.propTypes = {
    location: PropTypes.object.isRequired
}

export default Advanced