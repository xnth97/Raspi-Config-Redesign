import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Table, Button, message, Modal, Tooltip as AntTooltip } from 'antd'
import styles from '../components/layout/general.less'
import { Chart, Geom, Axis, Tooltip, Coord, Legend, Shape } from 'bizcharts'
import Guide from '../components/guide'

class Monitor extends React.Component {

    state = {
        cpuData: [],
        memData: [],
        processData: [],
        guideVisible: this.props.location.pathname == '/' ? true : false
    }

    componentDidMount() {
        setTimeout(this.renderChart, 200)
    }

    showInfo = (e) => {
        message.info('This is a ' + e + ' process.')
    }

    showTerminateDialog = (e) => {
        Modal.confirm({
            title: 'Confirmation',
            content: 'Do you want to terminate process ' + e + '?',
            onOk() {
                message.success('Process ' + e + ' terminated successfully.')
            },
            onCancel() {}
        })
    }

    onGuideOk = () => {
        this.setState({
            guideVisible: false
        })
    }

    renderChart = () => {
        this.setState({
            cpuData: [
                {id: 'CPU3', usage: 47},
                {id: 'CPU2', usage: 84},
                {id: 'CPU1', usage: 36},
                {id: 'CPU0', usage: 17}
            ],
            memData: [
                {type: 'used', usage: 571},
                {type: 'allocated', usage: 290},
                {type: 'free', usage: 125},
                {type: 'swap', usage: 38}
            ],
            processData: [
                {name: 'Python', cpu: 14.5, memory: 57.3, disk: 0, network: 0},
                {name: 'Python', cpu: 12.3, memory: 75.1, disk: 3, network: 0},
                {name: 'curl', cpu: 0, memory: 2, disk: 89.4, network: 156.7},
                {name: 'kernel_task', cpu: 14.5, memory: 36.8, disk: 0, network: 0},
                {name: 'ruby', cpu: 0.2, memory: 24.8, disk: 0, network: 0},
                {name: 'php', cpu: 0.5, memory: 35.3, disk: 6.2, network: 0},
                {name: 'adb', cpu: 0, memory: 3.6, disk: 0, network: 0},
                {name: 'ruby', cpu: 14.0, memory: 57.4, disk: 0, network: 0},
                {name: 'java', cpu: 11.2, memory: 180.5, disk: 3.5, network: 9.7},
                {name: 'Python', cpu: 14.5, memory: 57.3, disk: 0, network: 0},
                {name: 'Python', cpu: 12.3, memory: 75.1, disk: 3, network: 0},
                {name: 'curl', cpu: 0, memory: 2, disk: 89.4, network: 156.7},
                {name: 'kernel_task', cpu: 14.5, memory: 36.8, disk: 0, network: 0},
                {name: 'ruby', cpu: 0.2, memory: 24.8, disk: 0, network: 0},
                {name: 'php', cpu: 0.5, memory: 35.3, disk: 6.2, network: 0},
                {name: 'adb', cpu: 0, memory: 3.6, disk: 0, network: 0},
                {name: 'ruby', cpu: 14.0, memory: 57.4, disk: 0, network: 0},
                {name: 'java', cpu: 11.2, memory: 180.5, disk: 3.5, network: 9.7},
                {name: 'Python', cpu: 14.5, memory: 57.3, disk: 0, network: 0},
                {name: 'Python', cpu: 12.3, memory: 75.1, disk: 3, network: 0},
                {name: 'curl', cpu: 0, memory: 2, disk: 89.4, network: 156.7},
                {name: 'kernel_task', cpu: 14.5, memory: 36.8, disk: 0, network: 0},
                {name: 'ruby', cpu: 0.2, memory: 24.8, disk: 0, network: 0},
                {name: 'php', cpu: 0.5, memory: 35.3, disk: 6.2, network: 0},
                {name: 'adb', cpu: 0, memory: 3.6, disk: 0, network: 0},
                {name: 'ruby', cpu: 14.0, memory: 57.4, disk: 0, network: 0},
                {name: 'java', cpu: 11.2, memory: 180.5, disk: 3.5, network: 9.7},
                {name: 'Python', cpu: 14.5, memory: 57.3, disk: 0, network: 0},
                {name: 'Python', cpu: 12.3, memory: 75.1, disk: 3, network: 0},
                {name: 'curl', cpu: 0, memory: 2, disk: 89.4, network: 156.7},
                {name: 'kernel_task', cpu: 14.5, memory: 36.8, disk: 0, network: 0},
                {name: 'ruby', cpu: 0.2, memory: 24.8, disk: 0, network: 0},
                {name: 'php', cpu: 0.5, memory: 35.3, disk: 6.2, network: 0},
                {name: 'adb', cpu: 0, memory: 3.6, disk: 0, network: 0},
                {name: 'ruby', cpu: 14.0, memory: 57.4, disk: 0, network: 0},
                {name: 'java', cpu: 11.2, memory: 180.5, disk: 3.5, network: 9.7}
            ]
        })
    }

    render() {
        const {cpuData, memData, processData} = this.state

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length
        }, {
            title: 'CPU Usage (%)',
            dataIndex: 'cpu',
            key: 'cpu',
            sorter: (a, b) => a.cpu - b.cpu
        }, {
            title: 'Memory Usage (MB)',
            dataIndex: 'memory',
            key: 'memory',
            sorter: (a, b) => a.memory - b.memory
        }, {
            title: 'Disk (KB/s)',
            dataIndex: 'disk',
            key: 'disk',
            sorter: (a, b) => a.disk - b.disk
        }, {
            title: 'Network (KB/s)',
            dataIndex: 'network',
            key: 'network',
            sorter: (a, b) => a.network - b.network
        }, {
            title: 'Actions',
            key: 'actions',
            render: (process) => (
                <div>
                    <AntTooltip title='Shows the detailed information of this running process.'>
                        <Button
                        style={{marginRight: 16}}
                        onClick={this.showInfo.bind(this, process.name)}>Information</Button>
                    </AntTooltip>
                    <AntTooltip title='Terminate this running process. This will cause the selected program to stop running.'>
                        <Button
                        type='danger'
                        onClick={this.showTerminateDialog.bind(this, process.name)}>Terminate</Button>
                    </AntTooltip>
                </div>
            )
        }]

        return (
            <div>
                <Modal
                title='Guide to Raspi-config'
                visible={this.state.guideVisible}
                width='60vw'
                onCancel={this.onGuideOk}
                footer={null}>
                    <Guide/>
                </Modal>
                <Row>
                    <p className={styles.title}>Monitor</p>
                </Row>
                <Row>
                    <Col span={12} className={styles.option}>
                        <Row><p className={styles.subtitle}>CPU usage (%)</p></Row>
                        <Row>
                            <Chart
                            height={320}
                            data={this.state.cpuData}
                            forceFit>
                                <Coord transpose/>
                                <Axis name='id' label={{offset: 12}}/>
                                <Axis name='usage'/>
                                <Tooltip/>
                                <Geom type='interval' position='id*usage' color='id'/>
                            </Chart>
                        </Row>
                    </Col>
                    <Col span={12} className={styles.option}>
                        <Row><p className={styles.subtitle}>Memory allocation (MB)</p></Row>
                        <Row>
                            <Chart
                            height={320}
                            data={this.state.memData}
                            forceFit>
                                <Coord type='theta'/>
                                <Axis name='usage'/>
                                <Legend
                                position='right'
                                offsetY={0}
                                offsetX={-100}/>
                                <Tooltip/>
                                <Geom
                                type='intervalStack'
                                position='usage'
                                color='type'/>
                            </Chart>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <p className={styles.subtitle}>Process</p>
                    <Table
                    columns={columns}
                    dataSource={processData}
                    pagination={{showSizeChanger: true}}/>
                </Row>
            </div>
        )
    }
}

Monitor.propTypes = {
    location: PropTypes.object.isRequired
}

export default Monitor