import React from 'react';
import { PropTypes } from 'react';
import RedBox from 'redbox-react';

WrappedRedBox.propTypes = {
  error: PropTypes.any
};

export default function WrappedRedBox(_ref) {
  var error = _ref.error;

  if (error) {
    console.error(error.message || error, error.stack); // eslint-disable-line no-console
  }

  return React.createElement(RedBox, { error: error });
}
//# sourceMappingURL=RedBoxWrapper.js.map