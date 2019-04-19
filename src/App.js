import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SideDrawer from './components/Navigation/SideDrawer';
import Backdrop from './components/Navigation/Backdrop';
import Login from './components/Login/Login';
import Post from './components/Post/Post';
import Register from './components/Login/Register';
import Account from './components/Account/Account';
import GetProfile from './components/Profile/GetProfile';
import SearchBox from './components/SearchBox/SearchBox';
import MakePost from './components/MakePost/MakePost';
import './App.css';

const initialState={
    data:[],
    isLoggedIn:false,
    sideNavOpen:false,
    search:'',
    category:'',
    account:{
      id:'',
      firstname:'',
      lastname:'',
      email:'',
      entries:0,
      joined:''
    }
}
class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  componentDidMount(){ //fetch data from the database
    fetch('http://localhost:3000')
    .then(response=>response.json())
    .then(data=> {
      this.setState({data})
    })
  }

  userProfile = (info)=>{
     this.setState({account:
      {
        id:info.id,
        firstname:info.firstname,
        lastname:info.lastname,
        email:info.email,
        entries:info.entries,
        joined:info.joined,
      }
    })
  }

  toggleHandler = () =>{
    this.setState((prevState)=>{
      return{sideNavOpen:!prevState.sideNavOpen}
    })
  }  
  sideNavHandler=()=>{
    this.setState({sideNavOpen:false})
  }

  routeState = (route) => {
    if(route === "login"){
      this.setState({isLoggedIn:true});
    }
    if(route === "logout"){
      this.setState({isLoggedIn:false,initialState})
    }
  }

  handleSearch=(e) => {
    const {name,value} = e.target
    this.setState({[name]:value});
  }

  render() {
    const{isLoggedIn, account,search,data,category} = this.state;
      let backdrop;
      if(this.state.sideNavOpen){
        backdrop = <Backdrop backdropClick={this.sideNavHandler} />
      }
      let name = account.firstname + " " + account.lastname;
      const filteredPost = data.filter(post => {
        return post.title.toLowerCase().includes(search.toLowerCase()) || post.city.toLowerCase().includes(search.toLowerCase());
      })
   
    return (
      <Router>
      <div className="App">
          <Navigation toggleHandler={this.toggleHandler} name={name} isLoggedIn={isLoggedIn} routeState={this.routeState}/>
          <SideDrawer closeNav = {this.sideNavHandler} show={this.state.sideNavOpen} isLoggedIn={isLoggedIn} routeState={this.routeState} name={name}/>
          {backdrop}

        <main style={{marginTop: '70px'}}>
          <Switch> 
          <Route exact path="/" render={props=>(
              <React.Fragment>
                <SearchBox handleSearch={this.handleSearch} search={search} category={category}/>
                <div className="post">
                  <Post postData={filteredPost}/> 
                </div> 
              </React.Fragment> 
            )} 
          />
          <Route path="/login" render={props=>(
              <React.Fragment>
                <Login userProfile={this.userProfile} routeState={this.routeState} />
              </React.Fragment>
            )} 
          />
          <Route path="/register" render={props=>(
            <React.Fragment>
            <Register userProfile={this.userProfile} routeState={this.routeState} />
            </React.Fragment>
            )}
          />
          
            <Route path="/account/" render={props=>(
                <React.Fragment>
                { isLoggedIn? 
                 <Account/>
                 :<Redirect to="/login"/>
                }
                </React.Fragment>
              )}
            />
     
            <Route path="/profile/" render={props=>(
                <React.Fragment>
                { isLoggedIn? 
                 <GetProfile acc_id={account.id} />
                 :<Redirect to="/login"/>
                }
                </React.Fragment>
              )}
            />
       
      
           <Route path="/makepost" render={props=>(
                <React.Fragment>
              { isLoggedIn? 
                <MakePost acc_id={account.id}/> 
               :<Redirect to="/login"/>
              }
              </React.Fragment>
           )}
           />
          </Switch>
         </main>
      </div>
      </Router>
    )
  }
}

export default App;
