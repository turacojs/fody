'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'RedBoxWrapper.jsx';
exports.default = WrappedRedBox;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redboxReact = require('redbox-react');

var _redboxReact2 = _interopRequireDefault(_redboxReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

WrappedRedBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  error: _react.PropTypes.any
};

function WrappedRedBox(_ref) {
  let error = _ref.error;

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error.message || error, error.stack);
  }

  return _react2.default.createElement(_redboxReact2.default, { error: error, __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  });
}
//# sourceMappingURL=RedBoxWrapper.js.map