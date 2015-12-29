import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars

export default function withContext(ComposedComponent) {
    return class WithContext extends Component {
        static propTypes = {
            context: PropTypes.shape(
                {
                    addCss: PropTypes.func,
                    setTitle: PropTypes.func,
                    setMeta: PropTypes.func,
                    context: PropTypes.object,
                }
            ),
        };

        static childContextTypes = {
            addCss: PropTypes.func.isRequired,
            setTitle: PropTypes.func.isRequired,
            setMeta: PropTypes.func.isRequired,
            context: PropTypes.object.isRequired,
        };

        getChildContext() {
            return this.props.context;
        }

        render() {
            const { context, ...other } = this.props; // eslint-disable-line no-unused-vars
            return <ComposedComponent {...other} />;
        }
    };
}
