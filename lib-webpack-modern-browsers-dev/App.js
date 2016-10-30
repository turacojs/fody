import _t from 'tcomb-forked';
import { Component, PropTypes } from 'react';
import { ReactNodeType } from './types';

export default class App extends Component {

  getChildContext() {
    return { context: this.props.context };
  }

  render() {
    return _assert(function () {
      return this.props.children;
    }.apply(this, arguments), ReactNodeType, 'return value');
  }
}
App.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  context: PropTypes.object
};
App.childContextTypes = {
  context: PropTypes.object.isRequired
};

function _assert(x, type, name) {
  function message() {
    return 'Invalid value ' + _t.stringify(x) + ' supplied to ' + name + ' (expected a ' + _t.getTypeName(type) + ')';
  }

  if (_t.isType(type)) {
    if (!type.is(x)) {
      type(x, [name + ': ' + _t.getTypeName(type)]);

      _t.fail(message());
    }
  } else if (!(x instanceof type)) {
    _t.fail(message());
  }

  return x;
}
//# sourceMappingURL=App.js.map