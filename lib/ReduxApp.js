'use strict';

var _class, _temp;

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ReduxAppWithProvider = (_temp = _class = class ReduxAppWithProvider extends Component {

    render() {
        return React.createElement(
            Provider,
            { store: this.props.context.context.store },
            React.createElement(_App2.default, this.props)
        );
    }
}, _class.propTypes = {
    context: PropTypes.shape({
        context: PropTypes.shape({
            store: PropTypes.object.isRequired
        })
    })
}, _temp);
exports.default = ReduxAppWithProvider;
;
//# sourceMappingURL=ReduxApp.js.map