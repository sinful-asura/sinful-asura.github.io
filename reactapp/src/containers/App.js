import React, { Component } from 'react';
import './App.css';
import Persons from './persons/Persons'
import Footer from './footer/Footer'
import users from '../data/users';



/*------------------------------------------------------------------------------------------------------------
Notes: 
-Functions must be defined before state or they will not be recognised as existing functions!!!
-When calling events from children components instead of direct call <linked_prop_function(param)>,
  use: <linked_prop_function.call(this, params)> which will enable editing params easily
--------------------------------------------------------------------------------------------------------------*/


class App extends Component {
  constructor(){
    super();
    this.deleteUser = (props) => {
      this.setState(prevState => {
          const filterUsers = prevState.users.filter((user) => user.id !== props.userData.id);
          return (Object.assign(this.state, {users: filterUsers, cardCount: --prevState.cardCount, changeActive:false}))
      })
    }//end deleteUser
    this.buttonClick = async (props) => {
     await this.setState(prevState => {
          return (Object.assign(this.state, {changeActive: true}))
      })
    }//end buttonClick
    this.updateUser = (props) => {
       this.setState(prevState => {
            const userArray = [...prevState.users];
            const newUsers = userArray.map((user) => {
              if(user.id === props.userData.id){
                Object.assign(user, {name: props.newName})
                return user;
              }
              else{
                return user;
              }
            })
          return(Object.assign(this.state, {users: newUsers, changeActive: false}))
        })
    }//end updateUser
    this.setUser = (props) => {
      if(this.state.changeActive){
        this.setState(prevState => {
            const userArray = [...prevState.users];
            const newUsers = userArray.map((user) => {
              if(user.id === props.userData.id){
                Object.assign(user, {name: props.newName})
                return user;
              }
              else{
                return user;
              }
            })
          return(Object.assign(this.state, {users: newUsers, changeActive: false}))
        })
      }
    }//end setUser

    //----------------------STATES---------------------//
    this.state={
      changeActive: false,
      users: users,
      cardCount: users.length,
      events: 
        {
          deleteUser: this.deleteUser,
          setUser: this.setUser,
          buttonClick: this.buttonClick,
          updateUser: this.updateUser,
        }
    }
  }

  render() {
    return (
      <div className="App">
        <Persons 
          userData={this.state.users} 
          eventData={this.state.events}
          changeActive={this.state.changeActive}
          cardCount={this.state.cardCount}
        />
        <Footer 
          eventData={this.state.events}
        />
      </div>
    );
  }
}

export default App;
