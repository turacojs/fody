var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'layout/Body.jsx',
    _this = this;

import React from 'react';
import _t from 'tcomb-forked';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable jsx-a11y/html-has-lang */
import { ReactNodeType } from '../types';

export var PropsType = _t.interface({
  children: ReactNodeType
}, 'PropsType');

export default ((_ref) => {
  var children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ['children']);

  _assert({
    children,
    otherProps
  }, PropsType, '{ children, ...otherProps }');

  return _assert((() => {
    return React.createElement(
      'body',
      _extends({}, otherProps, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      children
    );
  })(), ReactNodeType, 'return value');
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
//# sourceMappingURL=Body.js.map