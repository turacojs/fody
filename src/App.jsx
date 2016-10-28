import { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    context: PropTypes.object,
  };

  static childContextTypes = {
    context: PropTypes.object.isRequired,
  };

  getChildContext() {
    return { context: this.props.context };
  }

  render() {
    return this.props.children;
  }
}
