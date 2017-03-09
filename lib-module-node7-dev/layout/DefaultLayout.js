var _jsxFileName = 'layout/DefaultLayout.jsx',
    _this = this;

import React from 'react';
import { ReactElementType as _ReactElementType, LayoutPropsType as _LayoutPropsType } from '../types';
import { Html, Head, Body } from './index';

import t from 'flow-runtime';
const ReactElementType = t.tdz(() => _ReactElementType);
const LayoutPropsType = t.tdz(() => _LayoutPropsType);
export default (function defaultLayout({ helmet, content }) {
  const _returnType = t.return(t.ref(ReactElementType));

  t.param('arguments[0]', t.ref(LayoutPropsType)).assert(arguments[0]);
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