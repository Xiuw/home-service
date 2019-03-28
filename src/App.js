import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SideDrawer from './components/Navigation/SideDrawer';
import Backdrop from './components/Navigation/Backdrop';
import Login from './components/Login/Login';


import './App.css';

class App extends Component {
  state={
    data:[],
    sideNavOpen:false
  }

  componentDidMount(){ //fetch data from the database
    fetch('http://localhost:3000/allpost')
    .then(response=>response.json())
    .then(data=> {
      this.setState({data})
    })
  }

  toggleHandler = () =>{
    this.setState((prevState)=>{
      return{sideNavOpen:!prevState.sideNavOpen}
    })
  }  
  backdropHandler=()=>{
    this.setState({sideNavOpen:false})
  }


  render() {
    console.log(this.state.data);
    let backdrop;
    if(this.state.sideNavOpen){
      backdrop = <Backdrop backdropClick={this.backdropHandler} />
    }
    return (
      <div className="App">
      <Navigation toggleHandler={this.toggleHandler}/>
      <SideDrawer show={this.state.sideNavOpen}/>
      {backdrop}
      <main style={{marginTop: '75px'}}>
       {/*<Login /> */}
      
      </main>
      </div>
    );
  }
}

export default App;
