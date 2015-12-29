import React, { Component, PropTypes } from 'react';
import withContext from './decorators/withContext';

@withContext
export default class App extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    };

    render() {
        return this.props.children;
    }
}
