/* eslint react/no-render-return-value: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RedBoxWrapper from './RedBoxWrapper';
import DefaultApp from './App';

export App from './App';
export Helmet from 'react-helmet';

export function app({ App, context, View, data, element }) {
  App = App || DefaultApp;
  const app = <App context={context}><View {...data} /></App>;
  if (!PRODUCTION) {
    return ReactDOM.render((
      <AppContainer errorReporter={RedBoxWrapper}>{app}</AppContainer>
    ), element);
  } else {
    return ReactDOM.render(app, element);
  }
}

export default function render({ App, context, View, data, element }) {
  return app({ App, context, View, data, element });
}
