import React, { Component } from 'react';
import { Button ,Container,Image, Row, Col} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import wipro from '../assets/wipro.png'
import iisc from '../assets/iisc.png'
import rvce from '../assets/rvce.png'
import NavBar from '../components/NavBar';


class Home extends Component {

render(){
   
    if(this.props.carla){return <Redirect to="/carla"/>};

  
    return (
        <>
        
        <div className="background">
        <NavBar/>
        <Row tyle={{marginTop:"20px"}}>
            <Col sm={12} md={4} style={{margin:"auto",textAlign:"right"}}>
            <img src={wipro} style={{width:"200px",height:"175px"}}/>
            </Col>
            <Col  sm={12} md={4} style={{margin:"auto",textAlign:"center"}}>
           
        <img src={iisc} style={{width:"150px",height:"150px"}}/>
            </Col>
            <Col  sm={12} md={4} style={{margin:"auto"}}>
            
        <img src={rvce} style={{width:"150px",height:"150px",textAlign:"left"}}/>
            </Col>
        </Row>
             <Container style={{textAlign:"center",fontFamily:"monospace",fontSize:"20px"}}>
             <p style={{textAlign:"center",marginTop:"50px"}}>Press Below button to start carla simulator!!</p>
                <Button style={{marginTop:"10px"}}  onClick={()=>{this.props.history.push("/carla");this.props.toggle()}} color="primary" >Start Carla</Button>
            </Container>
        </div>
        </>
    )
}
}

export default Home;