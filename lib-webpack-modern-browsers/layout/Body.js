import React from 'react';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable jsx-a11y/html-has-lang */
export default (function bodyJsx(_ref) {
  var { children } = _ref;

  var otherProps = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    'body',
    otherProps,
    children
  );
});
//# sourceMappingURL=Body.js.map