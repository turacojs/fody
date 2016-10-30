'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HelmetHeadPropType = _react.PropTypes.shape({ toComponent: _react.PropTypes.func.isRequired }).isRequired; /* eslint-disable jsx-a11y/html-has-lang, react/no-unused-prop-types */


const Html = (_ref) => {
  let head = _ref.head,
      children = _ref.children;
  return _react2.default.createElement(
    'html',
    head.htmlAttributes.toComponent(),
    _react2.default.createElement(
      'head',
      null,
      head.title.toComponent(),
      head.meta.toComponent(),
      head.link.toComponent(),
      head.base.toComponent(),
      head.style.toComponent(),
      head.script.toComponent()
    ),
    _react2.default.createElement(
      'body',
      null,
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
  children: _react.PropTypes.element.isRequired
};

exports.default = Html;
//# sourceMappingURL=HelmetHtml.js.map