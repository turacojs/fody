var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global document, PRODUCTION */
/* eslint react/no-render-return-value: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; //defines: #if !PRODUCTION = !false
import DefaultApp from './App';

import _App from './App';
export { _App as App };


export function app(_ref) {
  var App = _ref.App;
  var context = _ref.context;
  var View = _ref.View;
  var data = _ref.data;
  var element = _ref.element;

  App = App || DefaultApp;
  var app = React.createElement(
    App,
    { context: context, __self: this
    },
    React.createElement(View, _extends({}, data, {
      __self: this
    }))
  );
  if (module.hot) {
    return ReactDOM.render(React.createElement(
      AppContainer,
      {
        __self: this
      },
      app
    ), element);
  } else {
    return ReactDOM.render(app, element);
  }
}

export default function render(_ref2) {
  var App = _ref2.App;
  var context = _ref2.context;
  var View = _ref2.View;
  var data = _ref2.data;
  var element = _ref2.element;

  var ctx = {
    addCss: function addCss() {},

    setTitle: function setTitle(value) {
      return document.title = value;
    },
    setMeta: function setMeta() {},

    context: context
  };

  return app({
    context: ctx,
    App: App,
    View: View,
    data: data,
    element: element
  });
}
//# sourceMappingURL=browser.js.map