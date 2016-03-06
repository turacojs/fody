import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from 'fody-app';

export function renderToStringApp({ App, context, View, data }) {
    App = App || DefaultApp;
    return renderToString(<App context={context}><View {...data} /></App>);
}

function layout(Layout, data) {
    return <Layout {...data} />;
}

function app({ context, View, htmlData = {}, data, initialData, Html, App }) {
    const css = new Set();
    htmlData = Object.assign(htmlData, data);

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
            View,
            data,
        }),
        initialData: !initialData ? data : (typeof initialData === 'function' ? initialData() : initialData), // eslint-disable-line no-nested-ternary
        css: Array.from(css).join(''),
    });

    return layout(View.Layout || Html, htmlData, ctx);
}

export default function render(options) {
    return '<!doctype html>\n' + renderToStaticMarkup(app(options));
}
