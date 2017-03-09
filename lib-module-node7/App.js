var _class, _temp;

import { Component, PropTypes } from 'react';
let App = (_temp = _class = class extends Component {

  getChildContext() {
    return { context: this.props.context };
  }

  render() {
    return this.props.children;
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