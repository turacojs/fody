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

export function renderToStringApp(App = DefaultApp, appProps, View, props) {
  var app = React.createElement(
    App,
    appProps,
    React.createElement(View, props)
  );
  return renderToString(app);
}

var app = function app({
  Layout = DefaultLayout,
  layoutProps,
  App,
  appProps,
  View,
  props
}) {
  var content = renderToStringApp(App, appProps, View, props);
  var helmet = Helmet.rewind();
  return React.createElement(Layout, _extends({ helmet: helmet, content: content }, layoutProps));
};

export default function render(options) {
  return `<!doctype html>\n${ renderToStaticMarkup(app(options)) }`;
}
//# sourceMappingURL=index.js.map