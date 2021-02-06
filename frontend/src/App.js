import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './views/Home';
import Carla from './views/Carla';
const hist = createBrowserHistory();
import axios from 'axios';


class App extends Component {

  state={
    carla:(localStorage.getItem("carla")==null || localStorage.getItem("carla")=="false")?false:true,
    loading:false
};

CarlaOn=()=>{

   localStorage.setItem("carla",true);
    this.setState({carla:true,loading:true});
  
    axios.post("http://localhost:4000/startEngine")
          .then((res)=>{
              this.setState({loading:false});
          })
          .catch((error)=>{
            this.setState({loading:false});
            console.log(error);
       });
}

CarlaOff=()=>{

  localStorage.setItem("carla",false);
   this.setState({carla:false,loading:true});
   
   axios.post("http://localhost:4000/stopEngine")
          .then((res)=>{
              this.setState({loading:false});
          })
          .catch((error)=>{
            console.log(error);
            this.setState({loading:false});
       });
}

onUnload = e => { 

  e.preventDefault();
  e.returnValue = '';
}

componentDidMount() {
  window.addEventListener("beforeunload", this.onUnload);
}

componentWillUnmount() {
  
   window.removeEventListener("beforeunload", this.onUnload);
   
}

  render(){
  return (
    <Router history={hist}>
    <Switch>
    <Route  path="/home" render={(props) => <Home {...props} toggle={this.CarlaOn} carla={this.state.carla}/>} />
    <Route  path="/carla" render={(props) => <Carla loading={this.state.loading} {...props} toggle={this.CarlaOff} carla={this.state.carla}/>}/>
    <Redirect to="/home"/>
    </Switch>
  </Router>
  );
  }

  
}



export default App;
