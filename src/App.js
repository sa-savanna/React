import React from 'react';
import './App.css';
import { Header, NavBar, Profile, Dialogs } from './components/indexes';
import { Route, BrowserRouter } from 'react-router-dom';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className="appWrap">
        <Header />
        <NavBar />
        <div className='content'>
          <Route exact path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route exact path='/profile' render={() =>
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewpostText={props.updateNewpostText} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
