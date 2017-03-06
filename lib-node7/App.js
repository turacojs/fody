'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp;

var _react = require('react');

let App = (_temp = _class = class extends _react.Component {

  getChildContext() {
    return { context: this.props.context };
  }

  render() {
    return this.props.children;
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