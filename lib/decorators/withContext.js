'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = withContext;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// eslint-disable-line no-unused-vars

function withContext(ComposedComponent) {
    var _class, _temp;

    return _temp = _class = class WithContext extends _react.Component {

        getChildContext() {
            return this.props.context;
        }

        render() {
            var _props = this.props;
            const context = _props.context;

            const other = _objectWithoutProperties(_props, ['context']); // eslint-disable-line no-unused-vars

            return _react2.default.createElement(ComposedComponent, other);
        }
    }, _class.propTypes = {
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