import React, { Component } from 'react';
import './App.css';
import KitchenForm from './components/KitchenForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to The Kitchen</h1>
        </header>
        <br/>

       <KitchenForm/>
      </div>
    );
  }
}

export default App;
