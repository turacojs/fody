var _class, _temp;

import { Component, PropTypes } from 'react';
import { ReactNodeType as _ReactNodeType } from './types';

import t from 'flow-runtime';
const ReactNodeType = t.tdz(function () {
  return _ReactNodeType;
});
let App = (_temp = _class = class extends Component {

  getChildContext() {
    const _returnType = t.return(t.object());

    return _returnType.assert({ context: this.props.context });
  }

  render() {
    const _returnType2 = t.return(t.ref(ReactNodeType));

    return _returnType2.assert(this.props.children);
  }
}, _class.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  context: PropTypes.object.isRequired
}, _class.childContextTypes = {
  context: PropTypes.object.isRequired
}, _temp);
export { App as default };
//# sourceMappingURL=App.js.map