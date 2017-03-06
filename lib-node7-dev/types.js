'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutPropsType = exports.HelmetDataType = exports.HelmetDataAttributeType = exports.ReactNodeType = exports.ReactElementType = undefined;

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReactElementType = exports.ReactElementType = _flowRuntime2.default.refinement(_flowRuntime2.default.object(), input => {
  if (!(0, _react.isValidElement)(input)) return 'not a valid react element';
});

const ReactNodeType = exports.ReactNodeType = _flowRuntime2.default.type('React$Node', ReactNodeType => _flowRuntime2.default.union(_flowRuntime2.default.null(), _flowRuntime2.default.void(), _flowRuntime2.default.string(), _flowRuntime2.default.number(), ReactElementType, _flowRuntime2.default.array(ReactNodeType)));

const HelmetDataAttributeType = exports.HelmetDataAttributeType = _flowRuntime2.default.type('HelmetDataAttributeType', _flowRuntime2.default.object(_flowRuntime2.default.property('toString', _flowRuntime2.default.function(_flowRuntime2.default.return(_flowRuntime2.default.string()))), _flowRuntime2.default.property('toComponent', _flowRuntime2.default.function(_flowRuntime2.default.return(_flowRuntime2.default.ref(ReactElementType))))));

const HelmetDataType = exports.HelmetDataType = _flowRuntime2.default.type('HelmetDataType', _flowRuntime2.default.object(_flowRuntime2.default.property('htmlAttributes', HelmetDataAttributeType), _flowRuntime2.default.property('title', HelmetDataAttributeType), _flowRuntime2.default.property('base', HelmetDataAttributeType), _flowRuntime2.default.property('meta', HelmetDataAttributeType), _flowRuntime2.default.property('link', HelmetDataAttributeType), _flowRuntime2.default.property('script', HelmetDataAttributeType), _flowRuntime2.default.property('style', HelmetDataAttributeType)));

const LayoutPropsType = exports.LayoutPropsType = _flowRuntime2.default.type('LayoutPropsType', _flowRuntime2.default.object(_flowRuntime2.default.property('helmet', HelmetDataType), _flowRuntime2.default.property('content', _flowRuntime2.default.string())));
//# sourceMappingURL=types.js.map