/* global document, PRODUCTION */
/* eslint react/no-render-return-value: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
; //defines: #if !PRODUCTION = !true

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
    { context: context },
    React.createElement(View, data)
  );
  {
    return ReactDOM.render(app, element);
  }
}

export default function render(_ref3) {
  var App = _ref3.App;
  var context = _ref3.context;
  var View = _ref3.View;
  var data = _ref3.data;
  var element = _ref3.element;

  var ctx = {
    addCss() {},
    setTitle: value => document.title = value,
    setMeta() {},
    context
  };

  return app({
    context: ctx,
    App,
    View,
    data,
    element
  });
}
//# sourceMappingURL=browser.js.map