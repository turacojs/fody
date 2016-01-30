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

/**
 * @function
 * @param obj
*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function
 * @param
*/function app(_ref) {
    let App = _ref.App;
    let context = _ref.context;
    let View = _ref.View;
    let data = _ref.data;
    let element = _ref.element;

    App = App || _App2.default;
    return _reactDom2.default.render(_react2.default.createElement(
        App,
        { context: context },
        _react2.default.createElement(View, data)
    ), element);
}

/**
 * @function
 * @param
*/function render(_ref2) {
    let App = _ref2.App;
    let context = _ref2.context;
    let View = _ref2.View;
    let data = _ref2.data;
    let element = _ref2.element;

    const ctx = {
        setTitle: value => document.title = value,
        context
    };

    return app({
        context: ctx,
        App,
        View,
        data,
        element
    });
}
//# sourceMappingURL=browser.js.map