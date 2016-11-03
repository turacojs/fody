var _jsxFileName = 'layout/DefaultLayout.jsx',
    _this = this;

import React from 'react';
import _t from 'tcomb-forked';
import { ReactElementType, LayoutPropsType } from '../types';
import { Html, Head, Body } from './index';

export default (function (_ref) {
  var helmet = _ref.helmet,
      content = _ref.content;

  _assert({
    helmet: helmet,
    content: content
  }, LayoutPropsType, '{ helmet, content }');

  return _assert(function () {
    return React.createElement(
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
    );
  }(), ReactElementType, 'return value');
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