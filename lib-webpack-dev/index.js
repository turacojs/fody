var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'index.jsx',
    _this = this;

import _t from 'tcomb-forked';
/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';
import HelmetHtml from './HelmetHtml';

export { Helmet, HelmetHtml };
import _App from './App';
export { _App as App };


var DefaultHtml = function DefaultHtml(_ref) {
  var head = _ref.head,
      body = _ref.body;
  return React.createElement(
    HelmetHtml,
    { head: head, __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    React.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: body }, __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    })
  );
};

export function renderToStringApp() {
  var App = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DefaultApp;
  var appProps = arguments[1];
  var View = arguments[2];
  var props = arguments[3];
  return _assert(function () {
    var app = React.createElement(
      App,
      _extends({}, appProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }),
      React.createElement(View, _extends({}, props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }))
    );
    return renderToString(app);
  }.apply(this, arguments), _t.String, 'return value');
}

function app(_ref2) {
  var App = _ref2.App,
      appProps = _ref2.appProps,
      View = _ref2.View,
      props = _ref2.props,
      _ref2$Html = _ref2.Html,
      Html = _ref2$Html === undefined ? DefaultHtml : _ref2$Html;

  var body = renderToStringApp(App, appProps, View, props);
  var head = Helmet.rewind();
  return React.createElement(Html, { head: head, body: body, __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  });
}

export default function render(options) {
  return '<!doctype html>\n' + renderToStaticMarkup(app(options));
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