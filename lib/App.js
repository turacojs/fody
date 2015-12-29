'use strict';

var _class, _class2, _temp;

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withContext = require('./decorators/withContext');

var _withContext2 = _interopRequireDefault(_withContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let App = (0, _withContext2.default)(_class = (_temp = _class2 = class App extends _react.Component {

    render() {
        return this.props.children;
    }
}, _class2.propTypes = {
    children: _react.PropTypes.element.isRequired
}, _temp)) || _class;

exports.default = App;
//# sourceMappingURL=App.js.map