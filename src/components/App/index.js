import React from 'react';

import DragDrop from '../../containers/DragDrop';
import Constructor from '../../containers/Constructor';
import Playground from '../../containers/Playground';
import Code from '../../containers/Code';

import Icons from '../Icons';
import Header from '../Header';
import Sidebar from '../Sidebar';

import './App.css';

const App = () => {
  return (
    <DragDrop
      listId="primitives_to_constructor">
      <Icons/>
      <div className="App">
        <Header/>

        <main className="App__inner">
          <div className="App__container App__container--controlsList">
            <div className="App__content App__content--sticky">
              <Sidebar/>
            </div>
          </div>

        <div className="App__container App__container--constructor">
          <Constructor/>
        </div>

          <div className="App__container App__container--playground">
            <div className="App__content App__content--sticky">
              <Playground/>
              <Code/>
            </div>
          </div>
        </main>
      </div>
    </DragDrop>
  );
};

export default App;
