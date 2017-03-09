import React from 'react';
import RedBox from 'redbox-react';

export default (function (_ref) {
  var error = _ref.error;

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error.message || error, error.stack);
  }

  return React.createElement(RedBox, { error: error });
});
//# sourceMappingURL=RedBoxWrapper.js.map