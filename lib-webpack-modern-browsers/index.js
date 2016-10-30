/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import DefaultApp from './App';
import HelmetHtml from './HelmetHtml';

export { Helmet, HelmetHtml };
import _App from './App';
export { _App as App };


var DefaultHtml = (_ref) => {
  var head = _ref.head,
      body = _ref.body;
  return React.createElement(
    HelmetHtml,
    { head: head },
    React.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: body } })
  );
};

export function renderToStringApp() {
  var App = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DefaultApp;
  var appProps = arguments[1];
  var View = arguments[2];
  var props = arguments[3];

  var app = React.createElement(
    App,
    appProps,
    React.createElement(View, props)
  );
  return renderToString(app);
}

function app(_ref2) {
  var App = _ref2.App,
      appProps = _ref2.appProps,
      View = _ref2.View,
      props = _ref2.props,
      _ref2$Html = _ref2.Html,
      Html = _ref2$Html === undefined ? DefaultHtml : _ref2$Html;

  var body = renderToStringApp(App, appProps, View, props);
  var head = Helmet.rewind();
  return React.createElement(Html, { head: head, body: body });
}

export default function render(options) {
  return `<!doctype html>\n${ renderToStaticMarkup(app(options)) }`;
}
//# sourceMappingURL=index.js.map