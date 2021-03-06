'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'RedBoxWrapper.jsx';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redboxReact = require('redbox-react');

var _redboxReact2 = _interopRequireDefault(_redboxReact);

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PropsType = _flowRuntime2.default.type('PropsType', _flowRuntime2.default.object(_flowRuntime2.default.property('error', _flowRuntime2.default.any())));

exports.default = function redBoxWrapper(_arg) {
  let { error } = PropsType.assert(_arg);

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error.message || error, error.stack);
  }

  return _react2.default.createElement(_redboxReact2.default, { error: error, __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  });
};
//# sourceMappingURL=RedBoxWrapper.js.map