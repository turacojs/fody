import type { ReactElementType, LayoutPropsType } from '../types';
import { Html, Head, Body } from './index';

export default ({ helmet, content }: LayoutPropsType): ReactElementType => (
  <Html helmet={helmet}>
    <Head helmet={helmet} />
    <Body>
      <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
    </Body>
  </Html>
);
