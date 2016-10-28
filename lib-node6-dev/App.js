'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

class App extends _react.Component {

  getChildContext() {
    return { context: this.props.context };
  }

  render() {
    return this.props.children;
  }
}
exports.default = App;
App.propTypes = {
  children: _react.PropTypes.element.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  context: _react.PropTypes.object
};
App.childContextTypes = {
  context: _react.PropTypes.object.isRequired
};
//# sourceMappingURL=App.js.map