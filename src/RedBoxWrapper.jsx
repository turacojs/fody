import { PropTypes } from 'react';
import RedBox from 'redbox-react';

WrappedRedBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.any,
};

export default function WrappedRedBox({ error }) {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error.message || error, error.stack);
  }

  return <RedBox error={error} />;
}
