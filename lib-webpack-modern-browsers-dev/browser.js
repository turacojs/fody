var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'browser.jsx';
/* eslint react/no-render-return-value: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RedBoxWrapper from './RedBoxWrapper';
import DefaultApp from './App';

import _App from './App';
export { _App as App };
import _Helmet from 'react-helmet';
export { _Helmet as Helmet };


export function app(_ref) {
  var App = _ref.App,
      context = _ref.context,
      View = _ref.View,
      data = _ref.data,
      element = _ref.element;

  App = App || DefaultApp;
  var app = React.createElement(
    App,
    { context: context, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    React.createElement(View, _extends({}, data, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }))
  );

  return ReactDOM.render(React.createElement(
    AppContainer,
    { errorReporter: RedBoxWrapper, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    app
  ), element);
}

export default function render(_ref2) {
  var App = _ref2.App,
      context = _ref2.context,
      View = _ref2.View,
      data = _ref2.data,
      element = _ref2.element;

  return app({ App, context, View, data, element });
}
//# sourceMappingURL=browser.js.map