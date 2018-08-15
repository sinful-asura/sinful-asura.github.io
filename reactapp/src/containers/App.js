import React, { Component } from 'react';
import './App.css';
import Persons from './persons/Persons'
import Footer from './footer/Footer'

class App extends Component {
  constructor(){
    super();
    this.state={
      buttonClicked: false,
      changeId: 1
    }
    this.buttonClick = () => {
    const id = parseInt(prompt('Enter Id of user you want to change:'))
    this.setState(Object.assign(this.state, {changeId: id, buttonClicked: true}))
    }
  }

  componentDidMount(){
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <Persons changeActive={this.state.buttonClicked} changeId={this.state.changeId}/>
        <Footer isClicked={this.buttonClick}/>
      </div>
    );
  }
}

export default App;
