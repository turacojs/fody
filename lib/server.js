'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderToStringApp = renderToStringApp;
exports.default = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _fodyApp = require('fody-app');

var _fodyApp2 = _interopRequireDefault(_fodyApp);

/**
 * @function
 * @param obj
*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function
 * @param
*/function renderToStringApp(_ref) {
    let App = _ref.App;
    let context = _ref.context;
    let View = _ref.View;
    let data = _ref.data;

    App = App || _fodyApp2.default;
    return (0, _server.renderToString)(_react2.default.createElement(
        App,
        { context: context },
        _react2.default.createElement(View, data)
    ));
}

/**
 * @function
 * @param Layout
 * @param data
*/function layout(Layout, data) {
    return _react2.default.createElement(Layout, data);
}

/**
 * @function
 * @param
*/function app(_ref2) {
    let context = _ref2.context;
    let View = _ref2.View;
    var _ref2$htmlData = _ref2.htmlData;
    let htmlData = _ref2$htmlData === undefined ? {} : _ref2$htmlData;
    let data = _ref2.data;
    let initialData = _ref2.initialData;
    let Html = _ref2.Html;
    let App = _ref2.App;

    const css = new Set();
    htmlData = Object.assign(htmlData, data);

    const ctx = {
        addCss: value => css.add(value),
        setTitle: value => htmlData.title = value,
        setMeta: (key, value) => htmlData[key] = value,
        context: context
    };

    Object.assign(htmlData, {
        body: renderToStringApp({
            context: ctx,
            App: App,
            View: View,
            data: data
        }),
        initialData: !initialData ? data : typeof initialData === 'function' ? initialData() : initialData, // eslint-disable-line no-nested-ternary
        css: Array.from(css).join('')
    });

    const Layout = View.Layout || Html;
    if (!Layout) {
        throw new Error('Invalid Layout');
    }

    return layout(Layout, htmlData, ctx);
}

/**
 * @function
 * @param options
*/function render(options) {
    return '<!doctype html>\n' + (0, _server.renderToStaticMarkup)(app(options));
}
//# sourceMappingURL=server.js.map