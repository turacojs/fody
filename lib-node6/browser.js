'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = exports.Helmet = exports.unmountComponentAtNode = undefined;

var _reactDom = require('react-dom');

Object.defineProperty(exports, 'unmountComponentAtNode', {
  enumerable: true,
  get: function () {
    return _reactDom.unmountComponentAtNode;
  }
});
exports.default = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App2 = require('./App');

var _App3 = _interopRequireDefault(_App2);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Helmet = _reactHelmet2.default;
exports.App = _App3.default;
function render({ App = _App3.default, appProps, View, props, element }) {
  let app = _react2.default.createElement(
    App,
    appProps,
    _react2.default.createElement(View, props)
  );

  return _reactDom2.default.render(app, element);
}
//# sourceMappingURL=browser.js.map