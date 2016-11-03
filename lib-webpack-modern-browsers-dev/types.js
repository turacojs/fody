import _t from 'tcomb-forked';
/* eslint-disable import/no-extraneous-dependencies */
// import { REACT_ELEMENT_TYPE } from 'react/lib/ReactElement';
//
// export type ReactElement = {
//   $$typeof: REACT_ELEMENT_TYPE,
// }
import t from 'tcomb-forked';
import { isValidElement } from 'react';

export var ReactElementType = t.irreducible('ReactElement', isValidElement);
export var ReactNodeType = t.declare('ReactNode');

// recursive type
// https://github.com/gcanti/tcomb/commit/a7c9cd347dd029d33af828712ec18d6bf5a80ba8
ReactNodeType.define(t.union([t.Nil, t.String, t.Number, ReactElementType, t.list(ReactNodeType)]));

export var HelmetDataAttributeType = _t.interface({
   toString: _t.Function,
   toComponent: _t.Function
}, 'HelmetDataAttributeType');

export var HelmetDataType = _t.interface({
   htmlAttributes: HelmetDataAttributeType,
   title: HelmetDataAttributeType,
   base: HelmetDataAttributeType,
   meta: HelmetDataAttributeType,
   link: HelmetDataAttributeType,
   script: HelmetDataAttributeType,
   style: HelmetDataAttributeType
}, 'HelmetDataType');

export var LayoutPropsType = _t.interface({
   helmet: HelmetDataType,
   content: _t.String
}, 'LayoutPropsType');
//# sourceMappingURL=types.js.map