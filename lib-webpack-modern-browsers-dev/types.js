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
export var ReactNodeType = _t.union([ReactElementType, _t.list(ReactElementType), _t.String, _t.Number], 'ReactNodeType');
//# sourceMappingURL=types.js.map