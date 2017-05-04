import React from 'react';

import { Router, Route, hashHistory } from 'react-router';

import ViewCredits from './ViewCredits';
import TakeCredit from './TakeCredit';

export default class AppComponent extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={ViewCredits} />
                <Route path="/new" component={TakeCredit} />
            </Router>
        )
    }
}