import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';

export function renderToStringApp({ App, context, Component, data }) {
    App = App || DefaultApp;
    return renderToString(<App context={context}><Component {...data} /></App>);
}

function layout(Layout, data) {
    return <Layout {...data} />;
}

function app({ context, Component, data, initialData, Html, App }) {
    const css = new Set();
    const htmlData = data ? Object.assign({}, data) : {};

    const ctx = {
        addCss: value => css.add(value),
        setTitle: value => htmlData.title = value,
        setMeta: (key, value) => htmlData[key] = value,
        context,
    };

    Object.assign(htmlData, {
        body: renderToStringApp({
            context: ctx,
            App,
            Component,
            data,
        }),
        initialData: !initialData ? data : (typeof initialData === 'function' ? initialData() : initialData), // eslint-disable-line no-nested-ternary
        css: Array.from(css).join(''),
    });

    return layout(Component.Layout || Html, htmlData, ctx);
}

export default function render(options) {
    return '<!doctype html>\n' + renderToStaticMarkup(app(options));
}
