'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function defaultLayoutJsx({ helmet, content }) {
  return _react2.default.createElement(
    _index.Html,
    { helmet: helmet },
    _react2.default.createElement(_index.Head, { helmet: helmet }),
    _react2.default.createElement(
      _index.Body,
      null,
      _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: content } })
    )
  );
};
//# sourceMappingURL=DefaultLayout.js.map