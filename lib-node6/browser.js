'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helmet = exports.App = undefined;
exports.app = app;
exports.default = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App2 = require('./App');

var _App3 = _interopRequireDefault(_App2);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/no-render-return-value: "off" */
exports.App = _App3.default;
exports.Helmet = _reactHelmet2.default;
function app(_ref) {
  let App = _ref.App,
      context = _ref.context,
      View = _ref.View,
      data = _ref.data,
      element = _ref.element;

  App = App || _App3.default;
  const app = _react2.default.createElement(
    App,
    { context: context },
    _react2.default.createElement(View, data)
  );

  return _reactDom2.default.render(app, element);
}

function render(_ref2) {
  let App = _ref2.App,
      context = _ref2.context,
      View = _ref2.View,
      data = _ref2.data,
      element = _ref2.element;

  return app({ App, context, View, data, element });
}
//# sourceMappingURL=browser.js.map