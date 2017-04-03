var _jsxFileName = 'layout/DefaultLayout.jsx',
    _this = this;

import React from 'react';
import { ReactElementType as _ReactElementType, LayoutPropsType as _LayoutPropsType } from '../types';
import { Html, Head, Body } from './index';

import t from 'flow-runtime';
var ReactElementType = t.tdz(function () {
  return _ReactElementType;
});
var LayoutPropsType = t.tdz(function () {
  return _LayoutPropsType;
});
export default (function defaultLayout(_arg) {
  var _returnType = t.return(t.ref(ReactElementType));

  var _t$ref$assert = t.ref(LayoutPropsType).assert(_arg),
      helmet = _t$ref$assert.helmet,
      content = _t$ref$assert.content;

  return _returnType.assert(React.createElement(
    Html,
    { helmet: helmet, __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    React.createElement(Head, { helmet: helmet, __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    React.createElement(
      Body,
      {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      React.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: content }, __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      })
    )
  ));
});
//# sourceMappingURL=DefaultLayout.js.map