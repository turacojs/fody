'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = exports.HelmetHtml = exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'index.jsx'; /* eslint-disable react/prop-types */

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

var _HelmetHtml = require('./HelmetHtml');

var _HelmetHtml2 = _interopRequireDefault(_HelmetHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Helmet = _reactHelmet2.default;
exports.HelmetHtml = _HelmetHtml2.default;
exports.App = _App3.default;


const DefaultHtml = (_ref) => {
  let head = _ref.head,
      body = _ref.body;
  return _react2.default.createElement(
    _HelmetHtml2.default,
    { head: head, __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: body }, __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    })
  );
};

function renderToStringApp() {
  let App = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _App3.default;
  let appProps = arguments[1];
  let View = arguments[2];
  let props = arguments[3];
  return _assert(function () {
    const app = _react2.default.createElement(
      App,
      _extends({}, appProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }),
      _react2.default.createElement(View, _extends({}, props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }))
    );
    return (0, _server.renderToString)(app);
  }.apply(this, arguments), _tcombForked2.default.String, 'return value');
}

function app(_ref2) {
  let App = _ref2.App,
      appProps = _ref2.appProps,
      View = _ref2.View,
      props = _ref2.props;
  var _ref2$Html = _ref2.Html;
  let Html = _ref2$Html === undefined ? DefaultHtml : _ref2$Html;

  const body = renderToStringApp(App, appProps, View, props);
  const head = _reactHelmet2.default.rewind();
  return _react2.default.createElement(Html, { head: head, body: body, __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  });
}

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