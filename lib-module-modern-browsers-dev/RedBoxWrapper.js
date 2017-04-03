var _jsxFileName = 'RedBoxWrapper.jsx',
    _this = this;

import React from 'react';
import RedBox from 'redbox-react';

import t from 'flow-runtime';
const PropsType = t.type('PropsType', t.object(t.property('error', t.any())));


export default (function redBoxWrapper(_arg) {
  let { error } = PropsType.assert(_arg);

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
//# sourceMappingURL=RedBoxWrapper.js.map