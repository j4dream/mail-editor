import React from 'react';
import './App.css';
import Header from './compotents/Header';
import Side from './compotents/Side';
import Content from './compotents/Content';
import { Provider } from './compotents/EditorContext';
import simpleTpl from './data/simple';

function App() {
  return (
    <div className="App">
      <Provider data={simpleTpl}>
        <Header />
        <div className="row">
          <div className="col-xs-1 content">
            <Content />
          </div>
          <div className="col-xs-1 silder">
            <Side />
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
