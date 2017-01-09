'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropsType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'layout/Body.jsx',
    _arguments = arguments;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tcombForked = require('tcomb-forked');

var _tcombForked2 = _interopRequireDefault(_tcombForked);

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable jsx-a11y/html-has-lang */


const PropsType = exports.PropsType = _tcombForked2.default.interface({
  children: _types.ReactNodeType
}, 'PropsType');

exports.default = function bodyJsx(_ref) {
  let { children } = _assert(_ref, PropsType, '{ children, ...otherProps }');

  let otherProps = _objectWithoutProperties(_assert(_ref, PropsType, '{ children, ...otherProps }'), ['children']);

  _assert({
    children,
    otherProps
  }, PropsType, '{ children, ...otherProps }');

  return _assert(function () {
    return _react2.default.createElement(
      'body',
      _extends({}, otherProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      children
    );
  }.apply(undefined, _arguments), _types.ReactNodeType, 'return value');
};

function _assert(x, type, name) {
  function message() {
    return 'Invalid value ' + _tcombForked2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcombForked2.default.getTypeName(type) + ')';
  }

  if (_tcombForked2.default.isType(type)) {
    if (!type.is(x)) {
      type(x, [name + ': ' + _tcombForked2.default.getTypeName(type)]);

      _tcombForked2.default.fail(message());
    }
  } else if (!(x instanceof type)) {
    _tcombForked2.default.fail(message());
  }

  return x;
}
//# sourceMappingURL=Body.js.map