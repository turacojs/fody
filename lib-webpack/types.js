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
//# sourceMappingURL=types.js.map