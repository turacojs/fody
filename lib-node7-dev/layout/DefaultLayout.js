'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'layout/DefaultLayout.jsx';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('../types');

var _index = require('./index');

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReactElementType = _flowRuntime2.default.tdz(() => _types.ReactElementType);

const LayoutPropsType = _flowRuntime2.default.tdz(() => _types.LayoutPropsType);

exports.default = function defaultLayout(_arg) {
  const _returnType = _flowRuntime2.default.return(_flowRuntime2.default.ref(ReactElementType));

  let { helmet, content } = _flowRuntime2.default.ref(LayoutPropsType).assert(_arg);

  return _returnType.assert(_react2.default.createElement(
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
  ));
};
//# sourceMappingURL=DefaultLayout.js.map