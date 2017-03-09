/* eslint react/no-render-return-value: "off" */
import React from 'react';
import ReactDOM from 'react-dom';

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
    appProps,
    React.createElement(View, props)
  );

  return ReactDOM.render(app, element);
}
//# sourceMappingURL=browser.js.map