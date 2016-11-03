'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = exports.Head = exports.Html = exports.App = exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/prop-types */


var _layout = require('./layout');

Object.defineProperty(exports, 'Html', {
  enumerable: true,
  get: function get() {
    return _layout.Html;
  }
});
Object.defineProperty(exports, 'Head', {
  enumerable: true,
  get: function get() {
    return _layout.Head;
  }
});
Object.defineProperty(exports, 'Body', {
  enumerable: true,
  get: function get() {
    return _layout.Body;
  }
});
exports.renderToStringApp = renderToStringApp;
exports.default = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _server = require('react-dom/server');

var _App2 = require('./App');

var _App3 = _interopRequireDefault(_App2);

var _DefaultLayout = require('./layout/DefaultLayout');

var _DefaultLayout2 = _interopRequireDefault(_DefaultLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Helmet = _reactHelmet2.default;
exports.App = _App3.default;
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

const app = (_ref) => {
  var _ref$Layout = _ref.Layout;
  let Layout = _ref$Layout === undefined ? _DefaultLayout2.default : _ref$Layout,
      layoutProps = _ref.layoutProps,
      App = _ref.App,
      appProps = _ref.appProps,
      View = _ref.View,
      props = _ref.props;

  const content = renderToStringApp(App, appProps, View, props);
  const helmet = _reactHelmet2.default.rewind();
  return _react2.default.createElement(Layout, _extends({ helmet: helmet, content: content }, layoutProps));
};

function render(options) {
  return `<!doctype html>\n${ (0, _server.renderToStaticMarkup)(app(options)) }`;
}
//# sourceMappingURL=index.js.map