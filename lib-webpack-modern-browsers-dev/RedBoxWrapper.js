var _jsxFileName = 'RedBoxWrapper.jsx',
    _this = this;

import React from 'react';
import _t from 'tcomb-forked';
import RedBox from 'redbox-react';

var PropsType = _t.interface({
  error: _t.Any
}, 'PropsType');

export default (function redBoxWrapperJsx({ error }) {
  _assert({
    error
  }, PropsType, '{ error }');

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error.message || error, error.stack);
  }

  return React.createElement(RedBox, { error: error, __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  });
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
//# sourceMappingURL=RedBoxWrapper.js.map