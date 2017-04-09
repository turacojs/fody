import t from 'flow-runtime';
import { isValidElement, Component } from 'react';

export const ReactElementType = t.refinement(t.object(), input => {
  if (!isValidElement(input)) return 'not a valid react element';
});

export const ReactNodeType = t.type('React$Node', ReactNodeType =>
  t.union(
    t.null(),
    t.void(),
    t.string(),
    t.number(),
    ReactElementType,
    t.array(ReactNodeType),
  ));

export type TagNameType = string;
export type ReactClassComponentType = Component;
export type ReactStatelessComponentType = (props: Object) => ReactNodeType;

export type TagNameOrReactComponentType =
  | TagNameType
  | ReactClassComponentType
  | ReactStatelessComponentType;


export type HelmetDataAttributeType = {
  toString(): string,
  toComponent(): ReactElementType,
};

export type HelmetDataType = {
  htmlAttributes: HelmetDataAttributeType,
  title: HelmetDataAttributeType,
  base: HelmetDataAttributeType,
  meta: HelmetDataAttributeType,
  link: HelmetDataAttributeType,
  script: HelmetDataAttributeType,
  style: HelmetDataAttributeType,
};

export type LayoutPropsType = {
  helmet: HelmetDataType,
  content: string,
};
