'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = exports.HelmetHtml = exports.Helmet = undefined;
exports.renderToStringApp = renderToStringApp;
exports.default = render;

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
exports.HelmetHtml = _HelmetHtml2.default; /* eslint-disable react/prop-types */

exports.App = _App3.default;


const DefaultHtml = (_ref) => {
  let head = _ref.head,
      body = _ref.body;
  return _react2.default.createElement(
    _HelmetHtml2.default,
    { head: head },
    _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: body } })
  );
};

function renderToStringApp() {
  let App = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _App3.default;
  let appProps = arguments[1];
  let View = arguments[2];
  let props = arguments[3];

  const app = _react2.default.createElement(
    App,
    appProps,
    _react2.default.createElement(View, props)
  );
  return (0, _server.renderToString)(app);
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
  return _react2.default.createElement(Html, { head: head, body: body });
}

function render(options) {
  return `<!doctype html>\n${ (0, _server.renderToStaticMarkup)(app(options)) }`;
}
//# sourceMappingURL=index.js.map