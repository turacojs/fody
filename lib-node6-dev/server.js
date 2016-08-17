'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.renderToStringApp = renderToStringApp;
exports.default = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _App2 = require('./App');

var _App3 = _interopRequireDefault(_App2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.App = _App3.default;
function renderToStringApp(_ref) {
    let App = _ref.App;
    let context = _ref.context;
    let View = _ref.View;
    let data = _ref.data;

    App = App || _App3.default;
    return (0, _server.renderToString)(_react2.default.createElement(
        App,
        { context: context, __self: this
        },
        _react2.default.createElement(View, _extends({}, data, {
            __self: this
        }))
    ));
}

function layout(Layout, data) {
    return _react2.default.createElement(Layout, _extends({}, data, {
        __self: this
    }));
}

function app(_ref2) {
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

    const Layout = View.Layout || Html;
    if (!Layout) {
        throw new Error('Invalid Layout');
    }

    return layout(Layout, htmlData, ctx);
}

function render(options) {
    return `<!doctype html>\n${ (0, _server.renderToStaticMarkup)(app(options)) }`;
}
//# sourceMappingURL=server.js.map