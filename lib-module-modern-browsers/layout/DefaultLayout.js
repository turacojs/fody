import React from 'react';

import { Html, Head, Body } from './index';

export default (function ({ helmet, content }) {
  return React.createElement(
    Html,
    { helmet: helmet },
    React.createElement(Head, { helmet: helmet }),
    React.createElement(
      Body,
      null,
      React.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: content } })
    )
  );
});
//# sourceMappingURL=DefaultLayout.js.map