import { PropTypes } from 'react';
import RedBox from 'redbox-react';

WrappedRedBox.propTypes = {
  error: PropTypes.any,
};

export default function WrappedRedBox({ error }) {
  if (error) {
    console.error(error.message || error, error.stack); // eslint-disable-line no-console
  }

  return <RedBox error={error} />;
}
