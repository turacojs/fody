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
    var App = _ref.App;
    var context = _ref.context;
    var Component = _ref.Component;
    var data = _ref.data;

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
    var context = _ref2.context;
    var Component = _ref2.Component;
    var data = _ref2.data;
    var initialData = _ref2.initialData;
    var Html = _ref2.Html;
    var App = _ref2.App;

    var css = new Set();
    var htmlData = data ? Object.assign({}, data) : {};

    var ctx = {
        addCss: function addCss(value) {
            return css.add(value);
        },
        setTitle: function setTitle(value) {
            return htmlData.title = value;
        },
        setMeta: function setMeta(key, value) {
            return htmlData[key] = value;
        },
        context: context
    };

    Object.assign(htmlData, {
        body: renderToStringApp({
            context: ctx,
            App: App,
            Component: Component,
            data: data
        }),
        initialData: !initialData ? data : typeof initialData === 'function' ? initialData() : initialData, // eslint-disable-line no-nested-ternary
        css: Array.from(css).join('')
    });

    return layout(Component.Layout || Html, htmlData, ctx);
}

function render(options) {
    return '<!doctype html>\n' + (0, _server.renderToStaticMarkup)(app(options));
}
//# sourceMappingURL=server.js.map