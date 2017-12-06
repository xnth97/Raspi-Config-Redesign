import React from 'react'
import { Modal, Row, Col, Icon } from 'antd'
import styles from './layout/general.less'

class Guide extends React.Component {
    render() {
        return (
            <div>
                <Row className={styles.option}>
                    <p className={styles.guidetitle}><Icon type="pie-chart"/> Monitor</p>
                    <p className={styles.desc}>Monitor tab provides a monitor interface which you can check current hardware status of Raspberry Pi, including CPU usage percentage of each core and memory allocation status. Monitor also allows you to manage and sort your running processes.</p>
                </Row>
                <Row className={styles.option}>
                    <p className={styles.guidetitle}><Icon type="setting"/> General</p>
                    <p className={styles.desc}>General tab provides some general settings including accessibility, theme, wallpaper, screen saver, and reset options.</p>
                </Row>
                <Row className={styles.option}>
                    <p className={styles.guidetitle}><Icon type="code" /> Booting</p>
                    <p className={styles.desc}>Booting tab allows you to modify booting options of Raspberry Pi. You can choose whether to boot into desktop or command line mode, and whether you would like to automatically logged in as user "Pi". You can also choose whether to display a splash screen while booting up, or just show self-checking logs.</p>
                </Row>
                <Row className={styles.option}>
                    <p className={styles.guidetitle}><Icon type="global"/> Localization</p>
                    <p className={styles.desc}>Localization tab allows you to customize the language, time zone and other location-based settings.</p>
                </Row>
                <Row className={styles.option}>
                    <p className={styles.guidetitle}><Icon type="swap" /> Interfacing</p>
                    <p className={styles.desc}>Interfacing tab provides controls regarding remote access to this Raspberry Pi, including command line mode (<a href="javascript:window.open('https://en.wikipedia.org/wiki/Secure_Shell')">SSH</a>) and remote graphical desktop (<a href="javascript:window.open('https://en.wikipedia.org/wiki/Virtual_Network_Computing')">VNC</a>). You can also manage physical devices that you connect to this Pi in Interfacing tab.</p>
                </Row>
                <Row className={styles.option}>
                    <p className={styles.guidetitle}><Icon type="rocket" /> Advanced</p>
                    <p className={styles.desc}>Advanced tab allows experienced users to take full control of this Pi by adjusting some system-level core settings. Some of the options may be irrevocable and dangerous. Please think carefully before you adjust settings in Advanced tab. If you are not clear about the options, please read the <a href="javascript:window.open('https://www.raspberrypi.org/documentation/')">Raspberry Pi documentation</a>.</p>
                </Row>
                <Row className={styles.option}>
                    <p className={styles.guidetitle}><Icon type="appstore-o" /> Application</p>
                    <p className={styles.desc}>Application tab allows you to manage your applications like installing, uninstalling, reinstalling and upgrading applications. You can also search for new applications in your current software repositories, or add a new repository to this Pi.</p>
                </Row>
                <Row className={styles.option}>
                    <p className={styles.guidetitle}><Icon type="question-circle-o" /> About</p>
                    <p className={styles.desc}>About tab provides system information of this Pi and update settings. You can also recall this guide through About tab.</p>
                </Row>
            </div>
        )
    }
}

export default Guide
