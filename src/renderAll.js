import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewpostText} from './components/redux/State'


export const renderAll = (state) =>{
  
  ReactDOM.render(

    < App state={state} addPost= {addPost} updateNewpostText= {updateNewpostText}/>,
  
    document.getElementById('root')
  );
}






