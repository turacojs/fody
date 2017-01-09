var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'index.jsx',
    _this = this;

import _t from 'tcomb-forked';
/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';
import DefaultLayout from './layout/DefaultLayout';
import { ReactElementType } from './types';

export { Helmet };
import _App from './App';
export { _App as App };

export { Html, Head, Body } from './layout';

export function renderToStringApp(App = DefaultApp, appProps, View, props) {
  return _assert(function () {
    var app = React.createElement(
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
    return renderToString(app);
  }.apply(this, arguments), _t.String, 'return value');
}

var app = function app({
  Layout = DefaultLayout,
  layoutProps,
  App,
  appProps,
  View,
  props
}) {
  return _assert(function () {
    var content = renderToStringApp(App, appProps, View, props);
    var helmet = Helmet.rewind();
    return React.createElement(Layout, _extends({ helmet: helmet, content: content }, layoutProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }));
  }(), ReactElementType, 'return value');
};

export default function render(options) {
  return `<!doctype html>\n${ renderToStaticMarkup(app(options)) }`;
}

function _assert(x, type, name) {
  function message() {
    return 'Invalid value ' + _t.stringify(x) + ' supplied to ' + name + ' (expected a ' + _t.getTypeName(type) + ')';
  }

  if (_t.isType(type)) {
    if (!type.is(x)) {
      type(x, [name + ': ' + _t.getTypeName(type)]);

      _t.fail(message());
    }
  } else if (!(x instanceof type)) {
    _t.fail(message());
  }

  return x;
}
//# sourceMappingURL=index.js.map