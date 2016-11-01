/* eslint-disable jsx-a11y/html-has-lang, react/no-unused-prop-types */
import { PropTypes } from 'react';

const HelmetHeadPropType = PropTypes.shape({ toComponent: PropTypes.func.isRequired }).isRequired;

const Html = ({ head, children }) => (
  <html {...head.htmlAttributes.toComponent()}>
    <head>
      {head.title.toComponent()}
      {head.meta.toComponent()}
      {head.link.toComponent()}
      {head.base.toComponent()}
      {head.style.toComponent()}
      {head.script.toComponent()}
    </head>
    <body>
      {children}
    </body>
  </html>
);

Html.propTypes = {
  head: PropTypes.shape({
    htmlAttributes: HelmetHeadPropType,
    title: HelmetHeadPropType,
    meta: HelmetHeadPropType,
    link: HelmetHeadPropType,
    base: HelmetHeadPropType,
    script: HelmetHeadPropType,
    style: HelmetHeadPropType,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Html;
