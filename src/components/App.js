import React from 'react';
import { connect } from 'react-redux';

import ViewCredits from './ViewCredits';

import {fetchCredits} from '../actions/creditActions';

@connect((store) => {
    return {
        credits: store.credits.credits
    }
})

export default class App extends React.Component {
    componentWillMount() {
         this.props.dispatch(fetchCredits());
    }
    render() {
        return (
            <ViewCredits credits={this.props.credits} />
        )
    }
}