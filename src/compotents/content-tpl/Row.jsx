import React from 'react';
import { useHover } from '@umijs/hooks';

export default ({children}) => {
  const [isHovering, hoverRef] = useHover();
  return (
    <div
      className="row"
      ref={hoverRef}
      style={{
        outline: isHovering ? '#1890ff solid 2px' : 'none',
        outlineOffset: -2,
      }}
    >
      {children}
    </div>
  );
}