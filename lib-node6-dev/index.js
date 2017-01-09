'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = exports.Head = exports.Html = exports.App = exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'index.jsx'; /* eslint-disable react/prop-types */

var _layout = require('./layout');

Object.defineProperty(exports, 'Html', {
  enumerable: true,
  get: function () {
    return _layout.Html;
  }
});
Object.defineProperty(exports, 'Head', {
  enumerable: true,
  get: function () {
    return _layout.Head;
  }
});
Object.defineProperty(exports, 'Body', {
  enumerable: true,
  get: function () {
    return _layout.Body;
  }
});
exports.renderToStringApp = renderToStringApp;
exports.default = render;

var _tcombForked = require('tcomb-forked');

var _tcombForked2 = _interopRequireDefault(_tcombForked);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _server = require('react-dom/server');

var _App2 = require('./App');

var _App3 = _interopRequireDefault(_App2);

var _DefaultLayout = require('./layout/DefaultLayout');

var _DefaultLayout2 = _interopRequireDefault(_DefaultLayout);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Helmet = _reactHelmet2.default;
exports.App = _App3.default;
function renderToStringApp(App = _App3.default, appProps, View, props) {
  return _assert(function () {
    const app = _react2.default.createElement(
      App,
      _extends({}, appProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }),
      _react2.default.createElement(View, _extends({}, props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }))
    );
    return (0, _server.renderToString)(app);
  }.apply(this, arguments), _tcombForked2.default.String, 'return value');
}

const app = ({
  Layout = _DefaultLayout2.default,
  layoutProps,
  App,
  appProps,
  View,
  props
}) => {
  return _assert((() => {
    const content = renderToStringApp(App, appProps, View, props);
    const helmet = _reactHelmet2.default.rewind();
    return _react2.default.createElement(Layout, _extends({ helmet: helmet, content: content }, layoutProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }));
  })(), _types.ReactElementType, 'return value');
};

function render(options) {
  return `<!doctype html>\n${ (0, _server.renderToStaticMarkup)(app(options)) }`;
}

function _assert(x, type, name) {
  function message() {
    return 'Invalid value ' + _tcombForked2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcombForked2.default.getTypeName(type) + ')';
  }

  if (_tcombForked2.default.isType(type)) {
    if (!type.is(x)) {
      type(x, [name + ': ' + _tcombForked2.default.getTypeName(type)]);

      _tcombForked2.default.fail(message());
    }
  } else if (!(x instanceof type)) {
    _tcombForked2.default.fail(message());
  }

  return x;
}
//# sourceMappingURL=index.js.map