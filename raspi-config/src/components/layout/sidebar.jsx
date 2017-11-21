import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Row, Input } from 'antd'
import { Link } from 'dva/router'

class Sidebar extends React.Component {
    render() {
        let location = this.props.location

        return (
            <Menu
            defaultSelectedKeys={[location.pathname]}
            style={{width: 240, height: '100vh'}}
            mode="inline"
            >
                <Row style={{height: 140, textAlign: 'center'}}>
                    <Input.Search
                    placeholder="Search for any keyword"
                    style={{width: 200, marginTop: 48}}
                    />
                </Row>
                <Menu.Item key="/">
                    <Icon type="pie-chart"/>Monitor
                    <Link to="/"/>
                </Menu.Item>
                <Menu.Item key="/general">
                    <Icon type="setting"/>General
                    <Link to="/general"/>
                </Menu.Item>
                <Menu.Item key="/booting">
                    <Icon type="code" />Booting
                    <Link to="/booting"/>
                </Menu.Item>
                <Menu.Item key="/localization">
                    <Icon type="global"/>Localization
                    <Link to="/localization"></Link>
                </Menu.Item>
                <Menu.Item key="/interfacing">
                    <Icon type="swap" />Interfacing
                    <Link to="/interfacing"/>
                </Menu.Item>
                <Menu.Item key="/advanced">
                    <Icon type="rocket" />Advanced
                    <Link to="/advanced"/>
                </Menu.Item>
                <Menu.Item key="/application">
                    <Icon type="appstore-o" />Application
                    <Link to="/application"/>
                </Menu.Item>
                <Menu.Item key="/about">
                    <Icon type="question-circle-o" />About
                    <Link to="/about"/>
                </Menu.Item>
            </Menu>
        )
    }
}

Sidebar.propTypes = {
    location: PropTypes.object.isRequired
}

export default Sidebar
