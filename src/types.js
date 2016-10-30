/* eslint-disable import/no-extraneous-dependencies */
// import { REACT_ELEMENT_TYPE } from 'react/lib/ReactElement';
//
// export type ReactElement = {
//   $$typeof: REACT_ELEMENT_TYPE,
// }
import t from 'tcomb-forked';
import { isValidElement } from 'react';

export const ReactElementType = t.irreducible('ReactElement', isValidElement);
export type ReactNodeType = ReactElementType | Array<ReactElementType> | string | number;