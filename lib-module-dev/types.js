import t from 'flow-runtime';
import { isValidElement, Component } from 'react';

export var ReactElementType = t.refinement(t.object(), function (input) {
  if (!isValidElement(input)) return 'not a valid react element';
});

export var ReactNodeType = t.type('React$Node', function (ReactNodeType) {
  return t.union(t.null(), t.void(), t.string(), t.number(), ReactElementType, t.array(ReactNodeType));
});

export var TagNameType = t.type('TagNameType', t.string());
export var ReactClassComponentType = t.type('ReactClassComponentType', t.ref(Component));
export var ReactStatelessComponentType = t.type('ReactStatelessComponentType', t.function(t.param('props', t.object()), t.return(t.ref(ReactNodeType))));

export var TagNameOrReactComponentType = t.type('TagNameOrReactComponentType', t.union(TagNameType, ReactClassComponentType, ReactStatelessComponentType));

export var HelmetDataAttributeType = t.type('HelmetDataAttributeType', t.object(t.property('toString', t.function(t.return(t.string()))), t.property('toComponent', t.function(t.return(t.ref(ReactElementType))))));

export var HelmetDataType = t.type('HelmetDataType', t.object(t.property('htmlAttributes', HelmetDataAttributeType), t.property('title', HelmetDataAttributeType), t.property('base', HelmetDataAttributeType), t.property('meta', HelmetDataAttributeType), t.property('link', HelmetDataAttributeType), t.property('script', HelmetDataAttributeType), t.property('style', HelmetDataAttributeType)));

export var LayoutPropsType = t.type('LayoutPropsType', t.object(t.property('helmet', HelmetDataType), t.property('content', t.string())));
//# sourceMappingURL=types.js.map