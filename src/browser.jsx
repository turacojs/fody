/* eslint react/no-render-return-value: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RedBoxWrapper from './RedBoxWrapper';
import DefaultApp from './App';

export Helmet from 'react-helmet';
export App from './App';

export default function render({ App = DefaultApp, appProps, View, props, element }) {
  let app = <App {...appProps}><View {...props} /></App>;
  if (!PRODUCTION) {
    app = (
      <AppContainer errorReporter={RedBoxWrapper}>{app}</AppContainer>
    );
  }
  return ReactDOM.render(app, element);
}
