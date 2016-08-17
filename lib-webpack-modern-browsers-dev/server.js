var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';

import _App from './App';
export { _App as App };


export function renderToStringApp(_ref) {
    var App = _ref.App;
    var context = _ref.context;
    var View = _ref.View;
    var data = _ref.data;

    App = App || DefaultApp;
    return renderToString(React.createElement(
        App,
        { context: context, __self: this
        },
        React.createElement(View, _extends({}, data, {
            __self: this
        }))
    ));
}

function layout(Layout, data) {
    return React.createElement(Layout, _extends({}, data, {
        __self: this
    }));
}

function app(_ref2) {
    var context = _ref2.context;
    var View = _ref2.View;
    var _ref2$htmlData = _ref2.htmlData;
    var htmlData = _ref2$htmlData === undefined ? {} : _ref2$htmlData;
    var data = _ref2.data;
    var initialData = _ref2.initialData;
    var Html = _ref2.Html;
    var App = _ref2.App;

    var css = new Set();
    htmlData = Object.assign(htmlData, data);

    var ctx = {
        addCss: value => {
            return css.add(value);
        },
        setTitle: value => {
            return htmlData.title = value;
        },
        setMeta: (key, value) => {
            return htmlData[key] = value;
        },
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