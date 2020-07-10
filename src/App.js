import React from 'react';
import './App.css';
import { Header, NavBar, Profile } from './components/indexes';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className="appWrap">
        <Header />
        <NavBar />
        <div className='content'>
          <Route exact path='/dialogs' render={() =>
            <DialogsContainer store={props.store} />} />
          <Route exact path='/profile' render={() =>
            <Profile store={props.store} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
