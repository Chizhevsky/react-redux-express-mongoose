import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, browserHistory } from 'react-router';

import ViewCredits from './components/ViewCredits';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={ViewCredits} />
        </Router>
    </Provider>,
    document.getElementById('app')
);