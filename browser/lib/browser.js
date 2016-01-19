'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = app;
exports.default = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app(_ref) {
    var App = _ref.App;
    var context = _ref.context;
    var View = _ref.View;
    var data = _ref.data;
    var element = _ref.element;

    App = App || _App2.default;
    return _reactDom2.default.render(_react2.default.createElement(
        App,
        { context: context },
        _react2.default.createElement(View, data)
    ), element);
}

function render(_ref2) {
    var App = _ref2.App;
    var context = _ref2.context;
    var View = _ref2.View;
    var data = _ref2.data;
    var element = _ref2.element;

    var ctx = {
        setTitle: function setTitle(value) {
            return document.title = value;
        },
        context: context
    };

    return app({
        context: ctx,
        App: App,
        View: View,
        data: data,
        element: element
    });
}
//# sourceMappingURL=browser.js.map