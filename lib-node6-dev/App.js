'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

class App extends _react.Component {

  getChildContext() {
    return this.props.context;
  }

  render() {
    return this.props.children;
  }
}
exports.default = App;
App.propTypes = {
  children: _react.PropTypes.element.isRequired,
  context: _react.PropTypes.shape({
    addCss: _react.PropTypes.func,
    setTitle: _react.PropTypes.func,
    setMeta: _react.PropTypes.func,
    context: _react.PropTypes.object
  })
};
App.childContextTypes = {
  addCss: _react.PropTypes.func.isRequired,
  setTitle: _react.PropTypes.func.isRequired,
  setMeta: _react.PropTypes.func.isRequired,
  context: _react.PropTypes.object.isRequired
};
//# sourceMappingURL=App.js.map