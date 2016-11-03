'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'layout/DefaultLayout.jsx';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tcombForked = require('tcomb-forked');

var _tcombForked2 = _interopRequireDefault(_tcombForked);

var _types = require('../types');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_ref) => {
  var _assert2 = _assert(_ref, _types.LayoutPropsType, '{ helmet, content }');

  let helmet = _assert2.helmet,
      content = _assert2.content;

  _assert({
    helmet,
    content
  }, _types.LayoutPropsType, '{ helmet, content }');

  return _assert((() => {
    return _react2.default.createElement(
      _index.Html,
      { helmet: helmet, __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      _react2.default.createElement(_index.Head, { helmet: helmet, __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }),
      _react2.default.createElement(
        _index.Body,
        {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: content }, __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        })
      )
    );
  })(), _types.ReactElementType, 'return value');
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
//# sourceMappingURL=DefaultLayout.js.map