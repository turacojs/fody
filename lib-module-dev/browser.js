var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'browser.jsx';
/* eslint react/no-render-return-value: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RedBoxWrapper from './RedBoxWrapper';
import DefaultApp from './App';

export { unmountComponentAtNode } from 'react-dom';
import _Helmet from 'react-helmet';
export { _Helmet as Helmet };
import _App from './App';
export { _App as App };


export default function render(_ref) {
  var _ref$App = _ref.App,
      App = _ref$App === undefined ? DefaultApp : _ref$App,
      appProps = _ref.appProps,
      View = _ref.View,
      props = _ref.props,
      element = _ref.element;

  var app = React.createElement(
    App,
    _extends({}, appProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    React.createElement(View, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }))
  );

  app = React.createElement(
    AppContainer,
    { errorReporter: RedBoxWrapper, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    app
  );

  return ReactDOM.render(app, element);
}
//# sourceMappingURL=browser.js.map