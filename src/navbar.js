import React, { Component } from 'react';
import {Navbar, Nav,Form,} from 'react-bootstrap';
import Rat from "./rating.js"
import Example from "./modal.js"
import "./navbar.css"
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        keyword:''
     }
}
handelchange=(event)=>{
this.setState({keyword:event.target.value})
this.props.searchname(event.target.value)
}
    
    render() { 
        return ( <div className='Nav'>
    
  <Navbar bg="light" variant="dark">
    
    <Nav className="mr-auto">
      <Nav.Link id="hom" href="#home">Home</Nav.Link>
      {/* <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      
    </Nav>
    <Example/>
    <Rat   searchrating={rate=>this.props.searchrating(rate)}/>
    <Form inline>
  
      <input type='text' placeholder='search' onChange={this.handelchange} />
{this.state.keyword}
    </Form>
  </Navbar>  
        </div> );
    }
}
 
export default Main;