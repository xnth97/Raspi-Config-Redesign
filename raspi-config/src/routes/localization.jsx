import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Modal, message, Select } from 'antd'
import styles from '../components/layout/general.less'

class Localization extends React.Component {
    location = this.props.location

    render() {
        return (
            <div>
                <Row className={styles.title}>Localization</Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Location</p>
                        <p className={styles.desc}>Please input the nation in which you live. This setting will affect your unit and other settings</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Select defaultValue="us" style={{width: 120}}>
                            <Select.Option value="au">Australia</Select.Option>
                            <Select.Option value="ca">Canada</Select.Option>
                            <Select.Option value="cn">China</Select.Option>
                            <Select.Option value="fr">France</Select.Option>
                            <Select.Option value="ge">Germany</Select.Option>
                            <Select.Option value="it">Italy</Select.Option>
                            <Select.Option value="jp">Japan</Select.Option>
                            <Select.Option value="nz">New Zealand</Select.Option>
                            <Select.Option value="ru">Russia</Select.Option>
                            <Select.Option value="uk">United Kingdom</Select.Option>
                            <Select.Option value="us">United States</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Time Zone</p>
                        <p className={styles.desc}>Choose a time zone to apply to the system time</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Select defaultValue="-5" style={{width: 120}}>
                            <Select.Option value="-12">UTC-12:00</Select.Option>
                            <Select.Option value="-11">UTC-11:00</Select.Option>
                            <Select.Option value="-10">UTC-10:00</Select.Option>
                            <Select.Option value="-9">UTC-09:00</Select.Option>
                            <Select.Option value="-8">UTC-08:00</Select.Option>
                            <Select.Option value="-7">UTC-07:00</Select.Option>
                            <Select.Option value="-6">UTC-06:00</Select.Option>
                            <Select.Option value="-5">UTC-05:00</Select.Option>
                            <Select.Option value="-4">UTC-04:00</Select.Option>
                            <Select.Option value="-3">UTC-03:00</Select.Option>
                            <Select.Option value="-2">UTC-02:00</Select.Option>
                            <Select.Option value="-1">UTC-01:00</Select.Option>
                            <Select.Option value="0">UTC+00:00</Select.Option>
                            <Select.Option value="1">UTC+01:00</Select.Option>
                            <Select.Option value="2">UTC+02:00</Select.Option>
                            <Select.Option value="3">UTC+03:00</Select.Option>
                            <Select.Option value="4">UTC+04:00</Select.Option>
                            <Select.Option value="5">UTC+05:00</Select.Option>
                            <Select.Option value="6">UTC+061:00</Select.Option>
                            <Select.Option value="7">UTC+07:00</Select.Option>
                            <Select.Option value="8">UTC+08:00</Select.Option>
                            <Select.Option value="9">UTC+09:00</Select.Option>
                            <Select.Option value="10">UTC+10:00</Select.Option>
                            <Select.Option value="11">UTC+11:00</Select.Option>
                            <Select.Option value="12">UTC+12:00</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className={styles.option}>
                        <p className={styles.subtitle}>Language</p>
                        <p className={styles.desc}>Choose a language to display in system</p>
                    </Col>
                    <Col span={6} className={styles.control}>
                        <Select defaultValue="en" style={{width: 120}}>
                            <Select.Option value="en">English</Select.Option>
                            <Select.Option value="cn">中文</Select.Option>
                            <Select.Option value="jp">日本語</Select.Option>
                            <Select.Option value="fr">Français</Select.Option>
                            <Select.Option value="it">Italiano</Select.Option>
                            <Select.Option value="kr">한국어</Select.Option>
                            <Select.Option value="ru">ру́сский язы́к</Select.Option>
                        </Select>
                    </Col>
                </Row>
            </div>
        )
    }
}

Localization.propTypes = {
    location: PropTypes.object.isRequired
}

export default Localization