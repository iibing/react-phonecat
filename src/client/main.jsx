import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

// Add 'Ignored' suffix to ignore the no-unused-vars check of eslint
// http://eslint.org/docs/rules/no-unused-vars#varsignorepattern
import stylesIgnored from './styles/app.css'

import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import PhoneListRoot from './components/PhoneListRoot'
import PhoneDetails from './containers/PhoneDetails'
import GitHubRibbon from './components/GitHub/GitHubRibbon'

if (module.hot) {
    module.hot.accept()
}

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

render(
    <div className="view-container">
        <div className="view-frame">
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={PhoneListRoot}/>
                <Route path="phones/:phoneId" component={PhoneDetails}/>
            </Router>
        </Provider>
        </div>
        <GitHubRibbon href="https://github.com/iibing/react-phonecat"/>
    </div>, 
document.getElementById('root'))