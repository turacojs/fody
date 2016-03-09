import React from 'react';
import ReactDOM from 'react-dom';
import DefaultApp from 'fody-app';

export function app({ App, context, View, data, element }) {
    App = App || DefaultApp;
    return ReactDOM.render(<App context={context}><View {...data} /></App>, element);
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
