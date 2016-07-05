import React from 'react';
import ReactDOM from 'react-dom';
import DefaultApp from './App';

import _App from './App';
export { _App as App };


export function app({ App, context, View, data, element }) {
    App = App || DefaultApp;
    var app = React.createElement(
        App,
        { context: context },
        React.createElement(View, data)
    );
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        // eslint-disable-next-line global-require
        var AppContainer = require('react-hot-loader').AppContainer;
        return ReactDOM.render(React.createElement(
            AppContainer,
            null,
            app
        ), element);
    } else {
        return ReactDOM.render(app, element);
    }
}

export default function render({ App, context, View, data, element }) {
    var ctx = {
        addCss() {},
        setTitle: value => {
            return document.title = value;
        },
        setMeta() {},
        context
    };

    return app({
        context: ctx,
        App,
        View,
        data,
        element
    });
}
//# sourceMappingURL=browser.js.map