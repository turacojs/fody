import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';

import _App from './App';
export { _App as App };
import _Helmet from 'react-helmet';
export { _Helmet as Helmet };


export function renderToStringApp(_ref) {
  var App = _ref.App,
      context = _ref.context,
      View = _ref.View,
      data = _ref.data;

  App = App || DefaultApp;
  var app = React.createElement(
    App,
    { context: context },
    React.createElement(View, data)
  );
  return renderToString(app);
}

function layout(Layout, data) {
  return React.createElement(Layout, data);
}

function app(_ref2) {
  var context = _ref2.context,
      View = _ref2.View,
      _ref2$htmlData = _ref2.htmlData,
      htmlData = _ref2$htmlData === undefined ? {} : _ref2$htmlData,
      data = _ref2.data,
      initialData = _ref2.initialData,
      Html = _ref2.Html,
      App = _ref2.App;

  var css = new Set();
  htmlData = Object.assign(htmlData, data);

  if (!initialData) {
    initialData = data;
  } else {
    initialData = typeof initialData === 'function' ? initialData() : initialData;
  }

  var body = renderToStringApp({ App, context, View, data });

  var head = Helmet.rewind();

  Object.assign(htmlData, {
    head,
    body,
    initialData,
    css: Array.from(css).join('')
  });

  var Layout = View.Layout || Html;

  if (!Layout) {
    throw new Error('Invalid Layout');
  }

  return layout(Layout, htmlData);
}

export default function render(options) {
  return `<!doctype html>\n${ renderToStaticMarkup(app(options)) }`;
}
//# sourceMappingURL=index.js.map