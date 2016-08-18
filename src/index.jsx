import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';

export App from './App';

export function renderToStringApp({ App, context, View, data }) {
  App = App || DefaultApp;
  return renderToString(<App context={context}><View {...data} /></App>);
}

function layout(Layout, data) {
  return <Layout {...data} />;
}

function app({ context, View, htmlData = {}, data, initialData, Html, App }) {
  const css = new Set();
  htmlData = Object.assign(htmlData, data);

  const ctx = {
    addCss: value => css.add(value),
    setTitle: value => htmlData.title = value,
    setMeta: (key, value) => htmlData[key] = value,
    context,
  };

  if (!initialData) {
    initialData = data;
  } else {
    initialData = typeof initialData === 'function' ? initialData() : initialData;
  }

  Object.assign(htmlData, {
    body: renderToStringApp({
      context: ctx,
      App,
      View,
      data,
    }),
    initialData: initialData,
    css: Array.from(css).join(''),
  });

  const Layout = View.Layout || Html;

  if (!Layout) {
    throw new Error('Invalid Layout');
  }

  return layout(Layout, htmlData, ctx);
}

export default function render(options) {
  return `<!doctype html>\n${renderToStaticMarkup(app(options))}`;
}
