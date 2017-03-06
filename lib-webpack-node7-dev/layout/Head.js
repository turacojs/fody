var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'layout/Head.jsx',
    _this = this;

import React from 'react';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable jsx-a11y/html-has-lang */
import { ReactNodeType as _ReactNodeType, ReactElementType as _ReactElementType, HelmetDataType as _HelmetDataType } from '../types';

import t from 'flow-runtime';
const ReactNodeType = t.tdz(() => _ReactNodeType);
const ReactElementType = t.tdz(() => _ReactElementType);
const HelmetDataType = t.tdz(() => _HelmetDataType);
export const PropsType = t.type('PropsType', t.object(t.property('helmet', t.ref(HelmetDataType)), t.property('children', t.ref(ReactNodeType))));

export default (function head(_ref) {
  let { helmet, children } = _ref,
      otherProps = _objectWithoutProperties(_ref, ['helmet', 'children']);

  const _returnType = t.return(t.ref(ReactElementType));

  t.param('arguments[0]', PropsType).assert(arguments[0]);
  return _returnType.assert(React.createElement(
    'head',
    _extends({}, otherProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }),
    children,
    helmet.title.toComponent(),
    helmet.meta.toComponent(),
    helmet.link.toComponent(),
    helmet.base.toComponent(),
    helmet.style.toComponent(),
    helmet.script.toComponent()
  ));
});
//# sourceMappingURL=Head.js.map