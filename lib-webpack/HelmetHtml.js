import React from 'react';
/* eslint-disable jsx-a11y/html-has-lang, react/no-unused-prop-types */
import { PropTypes } from 'react';

var HelmetHeadPropType = PropTypes.shape({ toComponent: PropTypes.func.isRequired }).isRequired;

var Html = function Html(_ref) {
  var head = _ref.head,
      children = _ref.children;
  return React.createElement(
    'html',
    head.htmlAttributes.toComponent(),
    React.createElement(
      'head',
      null,
      head.title.toComponent(),
      head.meta.toComponent(),
      head.link.toComponent(),
      head.base.toComponent(),
      head.style.toComponent(),
      head.script.toComponent()
    ),
    React.createElement(
      'body',
      null,
      children
    )
  );
};

Html.propTypes = {
  head: PropTypes.shape({
    htmlAttributes: HelmetHeadPropType,
    title: HelmetHeadPropType,
    meta: HelmetHeadPropType,
    link: HelmetHeadPropType,
    base: HelmetHeadPropType,
    script: HelmetHeadPropType,
    style: HelmetHeadPropType
  }).isRequired,
  children: PropTypes.element.isRequired
};

export default Html;
//# sourceMappingURL=HelmetHtml.js.map