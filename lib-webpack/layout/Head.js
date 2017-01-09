import React from 'react';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable jsx-a11y/html-has-lang */
export default (function headJsx(_ref) {
  var helmet = _ref.helmet,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ['helmet', 'children']);

  return React.createElement(
    'head',
    otherProps,
    children,
    helmet.title.toComponent(),
    helmet.meta.toComponent(),
    helmet.link.toComponent(),
    helmet.base.toComponent(),
    helmet.style.toComponent(),
    helmet.script.toComponent()
  );
});
//# sourceMappingURL=Head.js.map