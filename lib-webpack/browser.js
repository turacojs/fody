import React from 'react';
import ReactDOM from 'react-dom';
import DefaultApp from './App';

import _App from './App';
export { _App as App };


export function app(_ref) {
    var App = _ref.App;
    var context = _ref.context;
    var View = _ref.View;
    var data = _ref.data;
    var element = _ref.element;

    App = App || DefaultApp;
    var app = React.createElement(
        App,
        { context: context },
        React.createElement(View, data)
    );
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        // eslint-disable-next-line global-require
        var AppContainer = require('react-hot-loader').AppContainer;
        return ReactDOM.render(React.createElement(
            AppContainer,
            null,
            app
        ), element);
    } else {
        return ReactDOM.render(app, element);
    }
}

export default function render(_ref2) {
    var App = _ref2.App;
    var context = _ref2.context;
    var View = _ref2.View;
    var data = _ref2.data;
    var element = _ref2.element;

    var ctx = {
        addCss: function addCss() {},

        setTitle: function setTitle(value) {
            return document.title = value;
        },
        setMeta: function setMeta() {},

        context: context
    };

    return app({
        context: ctx,
        App: App,
        View: View,
        data: data,
        element: element
    });
}
//# sourceMappingURL=browser.js.map