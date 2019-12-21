import React, { createElement, useContext } from 'react';
import { Context } from './EditorContext';
import * as Tpls from './content-tpl';

const buildContentTree = (node) => {
  return node.children.map(
          (child) => 
            createElement(Tpls[child.type],
              {
                key: child.id,
                className: child.className
              },
              buildContentTree(child)
            )
        );
}

export default () => {
  const { state } = useContext(Context);
  const { root } = state;
  const content = createElement(Tpls[root.type], {}, buildContentTree(root));
  
  return (
    <div>
      {content}
    </div>
  );

}
