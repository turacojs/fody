var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'layout/Body.jsx',
    _this = this;

import React from 'react';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable jsx-a11y/html-has-lang */
import { ReactNodeType as _ReactNodeType } from '../types';

import t from 'flow-runtime';
const ReactNodeType = t.tdz(function () {
  return _ReactNodeType;
});
export const PropsType = t.type('PropsType', t.object(t.property('children', t.ref(ReactNodeType))));

export default (function body(_arg) {
  const _returnType = t.return(t.ref(ReactNodeType));

  let _PropsType$assert = PropsType.assert(_arg),
      { children } = _PropsType$assert,
      otherProps = _objectWithoutProperties(_PropsType$assert, ['children']);

  return _returnType.assert(React.createElement(
    'body',
    _extends({}, otherProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    children
  ));
});
//# sourceMappingURL=Body.js.map