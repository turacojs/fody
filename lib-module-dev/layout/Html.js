var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'layout/Html.jsx',
    _this = this;

import React from 'react';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable jsx-a11y/html-has-lang */
import { ReactNodeType as _ReactNodeType, HelmetDataType as _HelmetDataType } from '../types';

import t from 'flow-runtime';
var ReactNodeType = t.tdz(function () {
  return _ReactNodeType;
});
var HelmetDataType = t.tdz(function () {
  return _HelmetDataType;
});
var PropsType = t.type('PropsType', t.object(t.property('helmet', t.ref(HelmetDataType)), t.property('children', t.ref(ReactNodeType))));


export default (function html(_arg) {
  var _returnType = t.return(t.ref(ReactNodeType));

  var _PropsType$assert = PropsType.assert(_arg),
      helmet = _PropsType$assert.helmet,
      children = _PropsType$assert.children,
      otherProps = _objectWithoutProperties(_PropsType$assert, ['helmet', 'children']);

  return _returnType.assert(React.createElement(
    'html',
    _extends({}, helmet.htmlAttributes.toComponent(), otherProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    children
  ));
});
//# sourceMappingURL=Html.js.map