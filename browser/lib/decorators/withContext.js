'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = withContext;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-line no-unused-vars

function withContext(ComposedComponent) {
    var _class, _temp;

    return _temp = _class = (function (_Component) {
        _inherits(WithContext, _Component);

        function WithContext() {
            _classCallCheck(this, WithContext);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(WithContext).apply(this, arguments));
        }

        _createClass(WithContext, [{
            key: 'getChildContext',
            value: function getChildContext() {
                return this.props.context;
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props;
                var context = _props.context;

                var other = _objectWithoutProperties(_props, ['context']); // eslint-disable-line no-unused-vars

                return _react2.default.createElement(ComposedComponent, other);
            }
        }]);

        return WithContext;
    })(_react.Component), _class.propTypes = {
        context: _react.PropTypes.shape({
            addCss: _react.PropTypes.func,
            setTitle: _react.PropTypes.func,
            setMeta: _react.PropTypes.func,
            context: _react.PropTypes.object
        })
    }, _class.childContextTypes = {
        addCss: _react.PropTypes.func.isRequired,
        setTitle: _react.PropTypes.func.isRequired,
        setMeta: _react.PropTypes.func.isRequired,
        context: _react.PropTypes.object.isRequired
    }, _temp;
}
//# sourceMappingURL=withContext.js.map