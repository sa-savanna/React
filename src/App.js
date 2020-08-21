import React from 'react';
import './App.css';
import { Header, NavBar, Profile } from './components/indexes';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {

  return (
    <BrowserRouter>
      <div className="appWrap">
        <Header />
        <NavBar />
        <div className='content'>
          <Route exact path='/dialogs' render={() => <DialogsContainer />} />
          <Route exact path='/profile' render={() => <Profile />} />
          <Route exact path='/users' render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
