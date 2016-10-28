'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helmet = exports.App = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'index.jsx';
exports.renderToStringApp = renderToStringApp;
exports.default = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _server = require('react-dom/server');

var _App2 = require('./App');

var _App3 = _interopRequireDefault(_App2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.App = _App3.default;
exports.Helmet = _reactHelmet2.default;
function renderToStringApp(_ref) {
  let App = _ref.App,
      context = _ref.context,
      View = _ref.View,
      data = _ref.data;

  App = App || _App3.default;
  const app = _react2.default.createElement(
    App,
    { context: context, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    _react2.default.createElement(View, _extends({}, data, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }))
  );
  return (0, _server.renderToString)(app);
}

function layout(Layout, data) {
  return _react2.default.createElement(Layout, _extends({}, data, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }));
}

function app(_ref2) {
  let context = _ref2.context,
      View = _ref2.View;
  var _ref2$htmlData = _ref2.htmlData;
  let htmlData = _ref2$htmlData === undefined ? {} : _ref2$htmlData,
      data = _ref2.data,
      initialData = _ref2.initialData,
      Html = _ref2.Html,
      App = _ref2.App;

  const css = new Set();
  htmlData = Object.assign(htmlData, data);

  if (!initialData) {
    initialData = data;
  } else {
    initialData = typeof initialData === 'function' ? initialData() : initialData;
  }

  const body = renderToStringApp({ App, context, View, data });

  const head = _reactHelmet2.default.rewind();

  Object.assign(htmlData, {
    head,
    body,
    initialData,
    css: Array.from(css).join('')
  });

  const Layout = View.Layout || Html;

  if (!Layout) {
    throw new Error('Invalid Layout');
  }

  return layout(Layout, htmlData);
}

function render(options) {
  return `<!doctype html>\n${ (0, _server.renderToStaticMarkup)(app(options)) }`;
}
//# sourceMappingURL=index.js.map