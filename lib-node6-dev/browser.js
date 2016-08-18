'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global document, PRODUCTION */
/* eslint react/no-render-return-value: "off" */
//defines: #if !PRODUCTION = !false
//defines: #if !PRODUCTION = !false


exports.app = app;
exports.default = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require('react-hot-loader');

var _RedBoxWrapper = require('./RedBoxWrapper');

var _RedBoxWrapper2 = _interopRequireDefault(_RedBoxWrapper);

var _App2 = require('./App');

var _App3 = _interopRequireDefault(_App2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    { context: context, __self: this
    },
    _react2.default.createElement(View, _extends({}, data, {
      __self: this
    }))
  );
  if (module.hot) {
    return _reactDom2.default.render(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      { errorReporter: _RedBoxWrapper2.default, __self: this
      },
      app
    ), element);
  } else {
    return _reactDom2.default.render(app, element);
  }
}

function render(_ref2) {
  let App = _ref2.App;
  let context = _ref2.context;
  let View = _ref2.View;
  let data = _ref2.data;
  let element = _ref2.element;

  const ctx = {
    addCss() {},
    setTitle: value => {
      return document.title = value;
    },
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