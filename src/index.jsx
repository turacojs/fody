import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';

export App from './App';
export Helmet from 'react-helmet';

export function renderToStringApp({ App, context, View, data }) {
  App = App || DefaultApp;
  const app = <App context={context}><View {...data} /></App>;
  return renderToString(app);
}

function layout(Layout, data) {
  return <Layout {...data} />;
}

function app({ context, View, htmlData = {}, data, initialData, Html, App }) {
  const css = new Set();
  htmlData = Object.assign(htmlData, data);

  if (!initialData) {
    initialData = data;
  } else {
    initialData = typeof initialData === 'function' ? initialData() : initialData;
  }

  const body = renderToStringApp({ App, context, View, data });

  const head = Helmet.rewind();

  Object.assign(htmlData, {
    head,
    body,
    initialData,
    css: Array.from(css).join(''),
  });

  const Layout = View.Layout || Html;

  if (!Layout) {
    throw new Error('Invalid Layout');
  }

  return layout(Layout, htmlData);
}

export default function render(options) {
  return `<!doctype html>\n${renderToStaticMarkup(app(options))}`;
}
