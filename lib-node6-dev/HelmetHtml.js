'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'HelmetHtml.jsx'; /* eslint-disable jsx-a11y/html-has-lang, react/no-unused-prop-types */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HelmetHeadPropType = _react.PropTypes.shape({ toComponent: _react.PropTypes.func.isRequired }).isRequired;

const Html = (_ref) => {
  let head = _ref.head,
      children = _ref.children;
  return _react2.default.createElement(
    'html',
    _extends({}, head.htmlAttributes.toComponent(), {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }),
    _react2.default.createElement(
      'head',
      {
        __self: undefined,
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
    _react2.default.createElement(
      'body',
      {
        __self: undefined,
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
  head: _react.PropTypes.shape({
    htmlAttributes: HelmetHeadPropType,
    title: HelmetHeadPropType,
    meta: HelmetHeadPropType,
    link: HelmetHeadPropType,
    base: HelmetHeadPropType,
    script: HelmetHeadPropType,
    style: HelmetHeadPropType
  }).isRequired,
  children: _react.PropTypes.node.isRequired
};

exports.default = Html;
//# sourceMappingURL=HelmetHtml.js.map