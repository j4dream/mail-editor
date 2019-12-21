import React, { createContext, useReducer } from 'react';
import Tree from '../tree';
import reducer from './reducer'
export const Context = createContext({});

export const Provider = (props) => {
  const {
    children,
    data,
  } = props;

  const tree = new Tree(data.page);


  const [state, dispatch] = useReducer(reducer, tree);

  const editorContext = {
    state,
    dispatch,
  };

  return <Context.Provider value={editorContext}>{children}</Context.Provider>;
}

export const { Consumer } = Context;