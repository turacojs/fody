import { Component, PropTypes } from 'react';

export default class App extends Component {

  getChildContext() {
    return this.props.context;
  }

  render() {
    return this.props.children;
  }
}
App.propTypes = {
  children: PropTypes.element.isRequired,
  context: PropTypes.shape({
    addCss: PropTypes.func,
    setTitle: PropTypes.func,
    setMeta: PropTypes.func,
    context: PropTypes.object
  })
};
App.childContextTypes = {
  addCss: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setMeta: PropTypes.func.isRequired,
  context: PropTypes.object.isRequired
};
//# sourceMappingURL=App.js.map