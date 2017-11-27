import React from 'react'
import PropTypes from 'prop-types'
import { Layout, LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import styles from './main.less'
import Sidebar from './sidebar'

const { Header, Footer, Sider, Content } = Layout

const Main = ({ children, location }) => {
    return (
        <LocaleProvider locale={enUS}>
            <Layout>
                <Sider style={{width: 240, backgroundColor: 'white'}}>
                    <Sidebar location={ location }/>
                </Sider>
                <Layout>
                    <Content className={styles.content}>
                        { children }
                    </Content>
                </Layout>
            </Layout>
        </LocaleProvider>
    )
}

Main.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object.isRequired
}

export default Main
