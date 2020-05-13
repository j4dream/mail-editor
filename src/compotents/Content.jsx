import React, { createElement, useContext } from 'react';
import { Context } from './EditorContext';
import * as Tpls from './content-tpl';

const buildContentTree = (node) => {
  return node.children.map(
          (child) => 
            createElement(Tpls[child.type],
              {
                ...child,
                key: child.id,
                className: child.className,
                style: child.style,
                node: child,
              },
              buildContentTree(child)
            )
        );
}

export default () => {
  const { state } = useContext(Context);
  const { root } = state;
  const content = createElement(Tpls[root.type], {}, buildContentTree(root));
  console.log('render content');
  return (
    <div>
      {content}
    </div>
  );

}
