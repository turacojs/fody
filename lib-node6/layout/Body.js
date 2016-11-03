'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable jsx-a11y/html-has-lang */
exports.default = (_ref) => {
  let children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'body',
    otherProps,
    children
  );
};
//# sourceMappingURL=Body.js.map