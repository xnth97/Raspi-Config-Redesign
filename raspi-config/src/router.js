import React from 'react'
import { Router, Route } from 'dva/router'
import PropTypes from 'prop-types'
import Main from './components/layout/main'
import Monitor from './routes/monitor'
import About from './routes/about'
import Advanced from './routes/advanced'
import Interfacing from './routes/interfacing'
import Localization from './routes/localization'
import Booting from './routes/booting'
import PlaceholderPage from './routes/placeholderPage'

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route component={Main}>
                <Route path="/" component={Monitor}/>
                <Route path="/general" component={PlaceholderPage}/>
                <Route path="/booting" component={Booting}/>
                <Route path="/localization" component={Localization}/>
                <Route path="/interfacing" component={Interfacing}/>
                <Route path="/advanced" component={Advanced}/>
                <Route path="/application" component={PlaceholderPage}/>
                <Route path="/about" component={About}/>
                <Route path="/monitor" component={Monitor}/>
            </Route>
        </Router>
    );
}

RouterConfig.propTypes = {
    history: PropTypes.object.isRequired
}

export default RouterConfig;
