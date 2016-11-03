'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redboxReact = require('redbox-react');

var _redboxReact2 = _interopRequireDefault(_redboxReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_ref) => {
  let error = _ref.error;

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error.message || error, error.stack);
  }

  return _react2.default.createElement(_redboxReact2.default, { error: error });
};
//# sourceMappingURL=RedBoxWrapper.js.map