var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';
import DefaultLayout from './layout/DefaultLayout';


export { Helmet };
import _App from './App';
export { _App as App };

export { Html, Head, Body } from './layout';

export function renderToStringApp() {
  var App = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DefaultApp;
  var appProps = arguments[1];
  var View = arguments[2];
  var props = arguments[3];

  var app = React.createElement(
    App,
    appProps,
    React.createElement(View, props)
  );
  return renderToString(app);
}

var app = function app(_ref) {
  var _ref$Layout = _ref.Layout,
      Layout = _ref$Layout === undefined ? DefaultLayout : _ref$Layout,
      layoutProps = _ref.layoutProps,
      App = _ref.App,
      appProps = _ref.appProps,
      View = _ref.View,
      props = _ref.props;

  var content = renderToStringApp(App, appProps, View, props);
  var helmet = Helmet.rewind();
  return React.createElement(Layout, _extends({ helmet: helmet, content: content }, layoutProps));
};

export default function render(options) {
  return '<!doctype html>\n' + renderToStaticMarkup(app(options));
}
//# sourceMappingURL=index.js.map