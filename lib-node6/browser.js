'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;
exports.app = app;
exports.default = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App2 = require('./App');

var _App3 = _interopRequireDefault(_App2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document, PRODUCTION */
/* eslint react/no-render-return-value: "off" */
; //defines: #if !PRODUCTION = !true

exports.App = _App3.default;
function app(_ref) {
  let App = _ref.App;
  let context = _ref.context;
  let View = _ref.View;
  let data = _ref.data;
  let element = _ref.element;

  App = App || _App3.default;
  const app = _react2.default.createElement(
    App,
    { context: context },
    _react2.default.createElement(View, data)
  );
  {
    return _reactDom2.default.render(app, element);
  }
}

function render(_ref3) {
  let App = _ref3.App;
  let context = _ref3.context;
  let View = _ref3.View;
  let data = _ref3.data;
  let element = _ref3.element;

  const ctx = {
    addCss() {},
    setTitle: value => document.title = value,
    setMeta() {},
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