import React, { useContext } from 'react';
import { useDrop } from '@umijs/hooks';

import { FORCE_UPDATE } from '../actions';
import imgTpl from '../json-tpl/image-content';

import { Context } from '../EditorContext';

export default ({children, className, node}) => {
  console.log(children);

  const { dispatch } = useContext(Context);

  const [ props ] = useDrop({
    onDom: (content, e) => {
      console.log(`custom: ${content} dropped`, node)
      node.children.push(imgTpl);
      dispatch({action: FORCE_UPDATE});
    }
  });

  return (
    <div
      {...props}
      className={className}
    >
      {
        !!children.length
          ? children
          : '没有内容，请添加'
        }
    </div>);
}
