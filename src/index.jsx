/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';
import DefaultLayout from './layout/DefaultLayout';
import type { ReactElementType } from './types';

export { Helmet };
export App from './App';
export { Html, Head, Body } from './layout';

export function renderToStringApp(App = DefaultApp, appProps, View, props): string {
  const app = <App {...appProps}><View {...props} /></App>;
  return renderToString(app);
}

const app = ({
  Layout = DefaultLayout,
  layoutProps,
  App,
  appProps,
  View,
  props,
}): ReactElementType => {
  const content = renderToStringApp(App, appProps, View, props);
  const helmet = Helmet.renderStatic();
  return <Layout helmet={helmet} content={content} {...layoutProps} />;
};

export default function render(options) {
  return `<!doctype html>\n${renderToStaticMarkup(app(options))}`;
}
