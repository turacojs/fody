'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WrappedRedBox;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redboxReact = require('redbox-react');

var _redboxReact2 = _interopRequireDefault(_redboxReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

WrappedRedBox.propTypes = {
  error: _react.PropTypes.any
};

function WrappedRedBox(_ref) {
  let error = _ref.error;

  if (error) {
    console.error(error.message || error, error.stack); // eslint-disable-line no-console
  }

  return _react2.default.createElement(_redboxReact2.default, { error: error, __self: this
  });
}
//# sourceMappingURL=RedBoxWrapper.js.map