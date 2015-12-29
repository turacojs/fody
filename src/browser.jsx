import React from 'react';
import ReactDOM from 'react-dom';
import DefaultApp from './App';

export function app({ App, context, Component, data, element }) {
    App = App || DefaultApp;
    return ReactDOM.render(<App context={context}><Component {...data} /></App>, element);
}

export default function render({ App, context, Component, data, element }) {
    const ctx = {
        setTitle: value => document.title = value,
        context,
    };

    return app({
        context: ctx,
        App,
        Component,
        data,
        element,
    });
}
