import React from 'react';

export const Box: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, ...props }) => (
  <div
    style={{
      background: '#e0e0e0',
      border: '4px solid #222',
      borderRadius: 16,
      padding: 16,
      boxShadow: '4px 4px 0 #888',
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);