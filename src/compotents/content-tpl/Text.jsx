import React, { useRef } from 'react';
import createTextEditor from '../../vendor/text-editor';
import { useEffect } from 'react';


export default ({node}) => {
  const elRef = useRef();

  useEffect(() => {
    createTextEditor(elRef.current).then((editor) => {
      console.log(editor);
    });
  }, []);

  return (
    <div ref={elRef}>{node.text}</div>
  );
}