import React from 'react';

export const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ style, ...props }) => (
  <img
    style={{
      border: '4px solid #222',
      borderRadius: 8,
      background: '#fff',
      boxShadow: '2px 2px 0 #888',
      ...style,
    }}
    {...props}
  />
);