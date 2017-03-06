'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _types = require('./types');

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReactNodeType = _flowRuntime2.default.tdz(() => _types.ReactNodeType);

let App = (_temp = _class = class extends _react.Component {

  getChildContext() {
    const _returnType = _flowRuntime2.default.return(_flowRuntime2.default.object());

    return _returnType.assert({ context: this.props.context });
  }

  render() {
    const _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.ref(ReactNodeType));

    return _returnType2.assert(this.props.children);
  }
}, _class.propTypes = {
  children: _react.PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  context: _react.PropTypes.object.isRequired
}, _class.childContextTypes = {
  context: _react.PropTypes.object.isRequired
}, _temp);
exports.default = App;
//# sourceMappingURL=App.js.map