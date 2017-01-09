import { Component, PropTypes } from 'react';


export default class App extends Component {

  getChildContext() {
    return { context: this.props.context };
  }

  render() {
    return this.props.children;
  }
}
App.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  context: PropTypes.object.isRequired
};
App.childContextTypes = {
  context: PropTypes.object.isRequired
};
//# sourceMappingURL=App.js.map