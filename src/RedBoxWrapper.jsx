import RedBox from 'redbox-react';

type PropsType = {
  error: any,
};

export default ({ error }: PropsType) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error.message || error, error.stack);
  }

  return <RedBox error={error} />;
};
