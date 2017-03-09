var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'index.jsx',
    _this = this;

/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';
import DefaultLayout from './layout/DefaultLayout';
import { ReactElementType as _ReactElementType } from './types';

import t from 'flow-runtime';
const ReactElementType = t.tdz(function () {
  return _ReactElementType;
});
export { Helmet };
import _App from './App';
export { _App as App };

export { Html, Head, Body } from './layout';

export function renderToStringApp(App = DefaultApp, appProps, View, props) {
  const _returnType = t.return(t.string());

  const app = React.createElement(
    App,
    _extends({}, appProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    React.createElement(View, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }))
  );
  return _returnType.assert(renderToString(app));
}

const app = function app({
  Layout = DefaultLayout,
  layoutProps,
  App,
  appProps,
  View,
  props
}) {
  const _returnType2 = t.return(t.ref(ReactElementType));

  const content = renderToStringApp(App, appProps, View, props);
  const helmet = Helmet.rewind();
  return _returnType2.assert(React.createElement(Layout, _extends({ helmet: helmet, content: content }, layoutProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })));
};

export default function render(options) {
  return `<!doctype html>\n${renderToStaticMarkup(app(options))}`;
}
//# sourceMappingURL=index.js.map