'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = exports.Helmet = exports.unmountComponentAtNode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'browser.jsx'; /* eslint react/no-render-return-value: "off" */

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

var _reactHotLoader = require('react-hot-loader');

var _RedBoxWrapper = require('./RedBoxWrapper');

var _RedBoxWrapper2 = _interopRequireDefault(_RedBoxWrapper);

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
    _extends({}, appProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    _react2.default.createElement(View, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }))
  );

  app = _react2.default.createElement(
    _reactHotLoader.AppContainer,
    { errorReporter: _RedBoxWrapper2.default, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    app
  );

  return _reactDom2.default.render(app, element);
}
//# sourceMappingURL=browser.js.map