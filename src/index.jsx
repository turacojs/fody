/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';
import HelmetHtml from './HelmetHtml';

export { Helmet, HelmetHtml };
export App from './App';


const DefaultHtml = ({ head, body }) => (
  <HelmetHtml head={head}>
    <div id="app" dangerouslySetInnerHTML={{ __html: body }} />
  </HelmetHtml>
);

export function renderToStringApp(App = DefaultApp, appProps, View, props): string {
  const app = <App {...appProps}><View {...props} /></App>;
  return renderToString(app);
}

function app({ App, appProps, View, props, Html = DefaultHtml }) {
  const body = renderToStringApp(App, appProps, View, props);
  const head = Helmet.rewind();
  return <Html head={head} body={body} />;
}

export default function render(options) {
  return `<!doctype html>\n${renderToStaticMarkup(app(options))}`;
}
