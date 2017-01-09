import { Component, PropTypes } from 'react';
import type { ReactNodeType } from './types';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    context: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    context: PropTypes.object.isRequired,
  };

  getChildContext(): Object {
    return { context: this.props.context };
  }

  render(): ReactNodeType {
    return this.props.children;
  }
}
