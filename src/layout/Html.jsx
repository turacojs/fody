/* eslint-disable jsx-a11y/html-has-lang */
import type { ReactNodeType, HelmetDataType } from '../types';

type PropsType = {
  helmet: HelmetDataType,
  children: ReactNodeType,
};

export default ({
  helmet,
  children,
  ...otherProps
}: PropsType): ReactNodeType => (
  <html {...helmet.htmlAttributes.toComponent()} {...otherProps}>
    {children}
  </html>
);
