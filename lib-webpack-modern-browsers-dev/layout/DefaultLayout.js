var _jsxFileName = 'layout/DefaultLayout.jsx',
    _this = this,
    _arguments = arguments;

import React from 'react';
import _t from 'tcomb-forked';
import { ReactElementType, LayoutPropsType } from '../types';
import { Html, Head, Body } from './index';

export default (function defaultLayoutJsx({ helmet, content }) {
  _assert({
    helmet,
    content
  }, LayoutPropsType, '{ helmet, content }');

  return _assert(function () {
    return React.createElement(
      Html,
      { helmet: helmet, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      React.createElement(Head, { helmet: helmet, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }),
      React.createElement(
        Body,
        {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        React.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: content }, __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        })
      )
    );
  }.apply(_this, _arguments), ReactElementType, 'return value');
});

function _assert(x, type, name) {
  function message() {
    return 'Invalid value ' + _t.stringify(x) + ' supplied to ' + name + ' (expected a ' + _t.getTypeName(type) + ')';
  }

  if (_t.isType(type)) {
    if (!type.is(x)) {
      type(x, [name + ': ' + _t.getTypeName(type)]);

      _t.fail(message());
    }
  } else if (!(x instanceof type)) {
    _t.fail(message());
  }

  return x;
}
//# sourceMappingURL=DefaultLayout.js.map