'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'RedBoxWrapper.jsx';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tcombForked = require('tcomb-forked');

var _tcombForked2 = _interopRequireDefault(_tcombForked);

var _redboxReact = require('redbox-react');

var _redboxReact2 = _interopRequireDefault(_redboxReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PropsType = _tcombForked2.default.interface({
  error: _tcombForked2.default.Any
}, 'PropsType');

exports.default = function redBoxWrapperJsx({ error }) {
  _assert({
    error
  }, PropsType, '{ error }');

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
//# sourceMappingURL=RedBoxWrapper.js.map