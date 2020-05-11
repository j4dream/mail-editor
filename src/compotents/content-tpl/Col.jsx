import React from 'react';
import { useHover } from '@umijs/hooks';

export default ({children, className}) => {
  const [isHovering, hoverRef] = useHover();
  return (
    <div
      ref={hoverRef}
      className={className}
      style={{
        outline: isHovering ? '#1890ff solid 2px' : 'none',
        outlineOffset: -2,
      }}
    >
      co {children}
    </div>);
}
