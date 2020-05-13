import React, { useContext } from 'react';
import { useDrop } from '@umijs/hooks';

import { FORCE_UPDATE } from '../actions';
import imgTpl from '../json-tpl/image-content';
import buttonTpl from '../json-tpl/button-content';
import textTpl from '../json-tpl/text-content';

import { Context } from '../EditorContext';

const tplFactory = {
  image: imgTpl,
  button: buttonTpl,
  text: textTpl,
};

export default React.memo(({children, className, node}) => {
  console.log(children);

  const { dispatch } = useContext(Context);

  const [ props ] = useDrop({
    onDom: (content, e) => {
      console.log(`custom: ${content} dropped`, node)

      node.addChild(tplFactory[content]);
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
});
