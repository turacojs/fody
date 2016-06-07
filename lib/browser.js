'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = app;
exports.default = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fodyApp = require('fody-app');

var _fodyApp2 = _interopRequireDefault(_fodyApp);

/**
 * @function
 * @param obj
*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function
 * @param
*/function app(_ref) {
    let App = _ref.App;
    let context = _ref.context;
    let View = _ref.View;
    let data = _ref.data;
    let element = _ref.element;

    App = App || _fodyApp2.default;
    const app = _react2.default.createElement(
        App,
        { context: context },
        _react2.default.createElement(View, data)
    );
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        const AppContainer = require('react-hot-loader').AppContainer;
        return _reactDom2.default.render(_react2.default.createElement(
            AppContainer,
            null,
            app
        ), element);
    } else {
        return _reactDom2.default.render(app, element);
    }
}

/**
 * @function
 * @param
*/function render(_ref2) {
    let App = _ref2.App;
    let context = _ref2.context;
    let View = _ref2.View;
    let data = _ref2.data;
    let element = _ref2.element;

    const ctx = {
        addCss: /**
                 * @function
                */function addCss() {},

        setTitle: value => document.title = value,
        setMeta: /**
                  * @function
                 */function setMeta() {},

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