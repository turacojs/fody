var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component, PropTypes } from 'react';

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return this.props.context;
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children;
        }
    }]);

    return App;
}(Component);

App.propTypes = {
    children: PropTypes.element.isRequired,
    context: PropTypes.shape({
        addCss: PropTypes.func,
        setTitle: PropTypes.func,
        setMeta: PropTypes.func,
        context: PropTypes.object
    })
};
App.childContextTypes = {
    addCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
    context: PropTypes.object.isRequired
};
export default App;
//# sourceMappingURL=App.js.map