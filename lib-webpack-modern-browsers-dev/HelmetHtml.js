var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'HelmetHtml.jsx',
    _this = this;

import React from 'react';
/* eslint-disable jsx-a11y/html-has-lang, react/no-unused-prop-types */
import { PropTypes } from 'react';

var HelmetHeadPropType = PropTypes.shape({ toComponent: PropTypes.func.isRequired }).isRequired;

var Html = (_ref) => {
  var head = _ref.head,
      children = _ref.children;
  return React.createElement(
    'html',
    _extends({}, head.htmlAttributes.toComponent(), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }),
    React.createElement(
      'head',
      {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      head.title.toComponent(),
      head.meta.toComponent(),
      head.link.toComponent(),
      head.base.toComponent(),
      head.style.toComponent(),
      head.script.toComponent()
    ),
    React.createElement(
      'body',
      {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
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
  children: PropTypes.node.isRequired
};

export default Html;
//# sourceMappingURL=HelmetHtml.js.map