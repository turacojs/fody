/* eslint-disable jsx-a11y/html-has-lang */
import type { ReactNodeType } from '../types';

export type PropsType = {
  children: ReactNodeType,
};

export default ({ children, ...otherProps }: PropsType): ReactNodeType => (
  <body {...otherProps}>
    {children}
  </body>
);
