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
    var App = _ref.App;
    var context = _ref.context;
    var View = _ref.View;
    var data = _ref.data;

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
            View: View,
            data: data
        }),
        initialData: !initialData ? data : typeof initialData === 'function' ? initialData() : initialData, // eslint-disable-line no-nested-ternary
        css: Array.from(css).join('')
    });

    return layout(View.Layout || Html, htmlData, ctx);
}

/**
 * @function
 * @param options
*/function render(options) {
    return '<!doctype html>\n' + (0, _server.renderToStaticMarkup)(app(options));
}
//# sourceMappingURL=server.js.map