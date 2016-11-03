'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.ReactNodeType = exports.ReactElementType = undefined;

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
const ReactNodeType = exports.ReactNodeType = _tcombForked2.default.declare('ReactNode');

// recursive type
// https://github.com/gcanti/tcomb/commit/a7c9cd347dd029d33af828712ec18d6bf5a80ba8
ReactNodeType.define(_tcombForked2.default.union([_tcombForked2.default.Nil, _tcombForked2.default.String, _tcombForked2.default.Number, ReactElementType, _tcombForked2.default.list(ReactNodeType)]));
//# sourceMappingURL=types.js.map