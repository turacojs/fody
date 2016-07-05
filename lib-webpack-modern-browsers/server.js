import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';

import _App from './App';
export { _App as App };


export function renderToStringApp({ App, context, View, data }) {
    App = App || DefaultApp;
    return renderToString(React.createElement(
        App,
        { context: context },
        React.createElement(View, data)
    ));
}

function layout(Layout, data) {
    return React.createElement(Layout, data);
}

function app({ context, View, htmlData = {}, data, initialData, Html, App }) {
    var css = new Set();
    htmlData = Object.assign(htmlData, data);

    var ctx = {
        addCss: value => css.add(value),
        setTitle: value => htmlData.title = value,
        setMeta: (key, value) => htmlData[key] = value,
        context
    };

    Object.assign(htmlData, {
        body: renderToStringApp({
            context: ctx,
            App,
            View,
            data
        }),
        // eslint-disable-next-line no-nested-ternary
        initialData: !initialData ? data : typeof initialData === 'function' ? initialData() : initialData,
        css: Array.from(css).join('')
    });

    var Layout = View.Layout || Html;
    if (!Layout) {
        throw new Error('Invalid Layout');
    }

    return layout(Layout, htmlData, ctx);
}

export default function render(options) {
    return `<!doctype html>\n${ renderToStaticMarkup(app(options)) }`;
}
//# sourceMappingURL=server.js.map