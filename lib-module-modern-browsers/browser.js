/* eslint react/no-render-return-value: "off" */
import React from 'react';
import ReactDOM from 'react-dom';

import DefaultApp from './App';

export { unmountComponentAtNode } from 'react-dom';
import _Helmet from 'react-helmet';
export { _Helmet as Helmet };
import _App from './App';
export { _App as App };


export default function render({ App = DefaultApp, appProps, View, props, element }) {
  let app = React.createElement(
    App,
    appProps,
    React.createElement(View, props)
  );

  return ReactDOM.render(app, element);
}
//# sourceMappingURL=browser.js.map