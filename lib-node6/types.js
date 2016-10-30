'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactElementType = undefined;

var _tcombForked = require('tcomb-forked');

var _tcombForked2 = _interopRequireDefault(_tcombForked);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
// import { REACT_ELEMENT_TYPE } from 'react/lib/ReactElement';
//
// export type ReactElement = {
//   $$typeof: REACT_ELEMENT_TYPE,
// }
const ReactElementType = exports.ReactElementType = _tcombForked2.default.irreducible('ReactElement', _react.isValidElement);
//# sourceMappingURL=types.js.map