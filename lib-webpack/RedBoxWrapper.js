import React from 'react';
import { PropTypes } from 'react';
import RedBox from 'redbox-react';

var WrappedRedBox = function WrappedRedBox(_ref) {
  var error = _ref.error;

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error.message || error, error.stack);
  }

  return React.createElement(RedBox, { error: error });
};

WrappedRedBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.any
};

export default WrappedRedBox;
//# sourceMappingURL=RedBoxWrapper.js.map