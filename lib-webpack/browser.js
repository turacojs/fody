/* eslint react/no-render-return-value: "off" */
import React from 'react';
import ReactDOM from 'react-dom';

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
    { context: context },
    React.createElement(View, data)
  );

  return ReactDOM.render(app, element);
}

export default function render(_ref2) {
  var App = _ref2.App,
      context = _ref2.context,
      View = _ref2.View,
      data = _ref2.data,
      element = _ref2.element;

  return app({ App: App, context: context, View: View, data: data, element: element });
}
//# sourceMappingURL=browser.js.map