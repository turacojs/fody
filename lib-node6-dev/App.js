'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tcombForked = require('tcomb-forked');

var _tcombForked2 = _interopRequireDefault(_tcombForked);

var _react = require('react');

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react.Component {

  getChildContext() {
    return _assert(function () {
      return { context: this.props.context };
    }.apply(this, arguments), _tcombForked2.default.Object, 'return value');
  }

  render() {
    return _assert(function () {
      return this.props.children;
    }.apply(this, arguments), _types.ReactNodeType, 'return value');
  }
}
exports.default = App;
App.propTypes = {
  children: _react.PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  context: _react.PropTypes.object
};
App.childContextTypes = {
  context: _react.PropTypes.object.isRequired
};

function _assert(x, type, name) {
  function message() {
    return 'Invalid value ' + _tcombForked2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcombForked2.default.getTypeName(type) + ')';
  }

  if (_tcombForked2.default.isType(type)) {
    if (!type.is(x)) {
      type(x, [name + ': ' + _tcombForked2.default.getTypeName(type)]);

      _tcombForked2.default.fail(message());
    }
  } else if (!(x instanceof type)) {
    _tcombForked2.default.fail(message());
  }

  return x;
}
//# sourceMappingURL=App.js.map