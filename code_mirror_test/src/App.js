import React, { Component } from 'react';
import './App.css';
import Ide from './components/IDE'
class App extends Component{
  render(){
    return(
      <>
        <h1>App Component</h1>
        <Ide />
      </>
    )
  }
}

export default App;
