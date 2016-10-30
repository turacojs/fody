import { PropTypes } from 'react';
import RedBox from 'redbox-react';

const WrappedRedBox = ({ error }) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error.message || error, error.stack);
  }

  return <RedBox error={error} />;
};

WrappedRedBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.any,
};

export default WrappedRedBox;
