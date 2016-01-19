'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderToStringApp = renderToStringApp;
exports.default = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderToStringApp(_ref) {
    let App = _ref.App;
    let context = _ref.context;
    let Component = _ref.Component;
    let data = _ref.data;

    App = App || _App2.default;
    return (0, _server.renderToString)(_react2.default.createElement(
        App,
        { context: context },
        _react2.default.createElement(Component, data)
    ));
}

function layout(Layout, data) {
    return _react2.default.createElement(Layout, data);
}

function app(_ref2) {
    let context = _ref2.context;
    let View = _ref2.View;
    let data = _ref2.data;
    let initialData = _ref2.initialData;
    let Html = _ref2.Html;
    let App = _ref2.App;

    const css = new Set();
    const htmlData = data ? Object.assign({
        View
    }, data) : {};

    const ctx = {
        addCss: value => css.add(value),
        setTitle: value => htmlData.title = value,
        setMeta: (key, value) => htmlData[key] = value,
        context
    };

    Object.assign(htmlData, {
        body: renderToStringApp({
            context: ctx,
            App,
            Component: View,
            data
        }),
        initialData: !initialData ? data : typeof initialData === 'function' ? initialData() : initialData, // eslint-disable-line no-nested-ternary
        css: Array.from(css).join('')
    });

    return layout(View.Layout || Html, htmlData, ctx);
}

function render(options) {
    return '<!doctype html>\n' + (0, _server.renderToStaticMarkup)(app(options));
}
//# sourceMappingURL=server.js.map