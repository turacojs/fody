import React from 'react';
import ReactDOM from 'react-dom';
import DefaultApp from 'fody-app';

export function app({ App, context, View, data, element }) {
    App = App || DefaultApp;
    const app = <App context={context}><View {...data} /></App>;
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        const AppContainer = require('react-hot-loader').AppContainer;
        return ReactDOM.render(<AppContainer>{app}</AppContainer>, element);
    } else {
        return ReactDOM.render(app, element);
    }
}

export default function render({ App, context, View, data, element }) {
    const ctx = {
        addCss() {},
        setTitle: value => document.title = value,
        setMeta() {},
        context,
    };

    return app({
        context: ctx,
        App,
        View,
        data,
        element,
    });
}
