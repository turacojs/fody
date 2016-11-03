/* eslint-disable jsx-a11y/html-has-lang */
import type { ReactNodeType, ReactElementType, HelmetDataType } from '../types';

export type PropsType = {
  helmet: HelmetDataType,
  children: ReactNodeType,
};

export default ({ helmet, children, ...otherProps }: PropsType): ReactElementType => (
  <head {...otherProps}>
    {children}
    {helmet.title.toComponent()}
    {helmet.meta.toComponent()}
    {helmet.link.toComponent()}
    {helmet.base.toComponent()}
    {helmet.style.toComponent()}
    {helmet.script.toComponent()}
  </head>
);
