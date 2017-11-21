import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Row } from 'antd'

const PlaceholderPage = ({ location }) => {
    return (
        <Row>
            <h1>This page hasn't been implemented yet...</h1>
        </Row>
    )
}

PlaceholderPage.propTypes = {
    location: PropTypes.object.isRequired
}

export default PlaceholderPage