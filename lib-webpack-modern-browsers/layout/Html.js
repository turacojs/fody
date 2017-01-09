var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable jsx-a11y/html-has-lang */
export default (function htmlJsx(_ref) {
  var {
    helmet,
    children
  } = _ref;

  var otherProps = _objectWithoutProperties(_ref, ['helmet', 'children']);

  return React.createElement(
    'html',
    _extends({}, helmet.htmlAttributes.toComponent(), otherProps),
    children
  );
});
//# sourceMappingURL=Html.js.map