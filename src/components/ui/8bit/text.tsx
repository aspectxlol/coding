import React from 'react';

export const Text: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ children, style, ...props }) => (
  <span
    style={{
      fontFamily: 'monospace',
      fontSize: 18,
      color: '#222',
      ...style,
    }}
    {...props}
  >
    {children}
  </span>
);