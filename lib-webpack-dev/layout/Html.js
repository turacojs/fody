var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'layout/Html.jsx',
    _this = this,
    _arguments = arguments;

import React from 'react';
import _t from 'tcomb-forked';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable jsx-a11y/html-has-lang */
import { ReactNodeType, HelmetDataType } from '../types';

var PropsType = _t.interface({
  helmet: HelmetDataType,
  children: ReactNodeType
}, 'PropsType');

export default (function htmlJsx(_ref) {
  var helmet = _ref.helmet,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ['helmet', 'children']);

  _assert({
    helmet: helmet,
    children: children,
    otherProps: otherProps
  }, PropsType, '{ helmet, children, ...otherProps }');

  return _assert(function () {
    return React.createElement(
      'html',
      _extends({}, helmet.htmlAttributes.toComponent(), otherProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }),
      children
    );
  }.apply(_this, _arguments), ReactNodeType, 'return value');
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
//# sourceMappingURL=Html.js.map