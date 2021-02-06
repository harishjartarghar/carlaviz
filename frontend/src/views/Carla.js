import React, { Component } from 'react';
import {ThemeProvider } from "@streetscape.gl/monochrome";
import {UI_THEME } from "../variables/constants";
import CarlaViz from '../components/CarlaViz';
import { Redirect } from 'react-router-dom';
import loading from '../assets/loading.gif'
import axios from 'axios';

class Carla extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:true
        }
    }
    componentDidMount=()=>{
        setTimeout(()=>{
            axios.post("http://localhost:7000/start")
          .then((res)=>{
              setTimeout(()=>this.setState({loading:false}),5000)
          })
          .catch((error)=>{
            this.setState({loading:false});
            alert(error);
            console.log(error);
       });
      }
          ,
            10000
        )

        
    }

render(){



    if(!this.props.carla){return <Redirect to="/home"/>};

    if(this.state.loading) {return <div style={{margin:"0 auto",minHeight:"100%"}}><img src={loading} style={{display:"block",margin:"auto"}} alt="loading"/></div>}


    return (
        <div>
            <ThemeProvider theme={UI_THEME}>
                <CarlaViz {...this.props}/>
            </ThemeProvider>
        </div>
    );
}
}

export default Carla;
