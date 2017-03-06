'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'layout/Html.jsx';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('../types');

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable jsx-a11y/html-has-lang */


const ReactNodeType = _flowRuntime2.default.tdz(() => _types.ReactNodeType);

const HelmetDataType = _flowRuntime2.default.tdz(() => _types.HelmetDataType);

const PropsType = _flowRuntime2.default.type('PropsType', _flowRuntime2.default.object(_flowRuntime2.default.property('helmet', _flowRuntime2.default.ref(HelmetDataType)), _flowRuntime2.default.property('children', _flowRuntime2.default.ref(ReactNodeType))));

exports.default = function html(_ref) {
  let {
    helmet,
    children
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ['helmet', 'children']);

  const _returnType = _flowRuntime2.default.return(_flowRuntime2.default.ref(ReactNodeType));

  _flowRuntime2.default.param('arguments[0]', PropsType).assert(arguments[0]);

  return _returnType.assert(_react2.default.createElement(
    'html',
    _extends({}, helmet.htmlAttributes.toComponent(), otherProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    children
  ));
};
//# sourceMappingURL=Html.js.map