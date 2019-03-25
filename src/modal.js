import React from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import "./navbar.css"
class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        title:'',
        image:'',
        rating:1
    }}
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
    AddMymovie=()=>{
      this.props.addmovie(
        {
          title:this.state.title,
          image:this.state.image,
          rating:this.state.rating,
      
        }
      )
        }
        handleChange=(event)=>
     {
          this.setState(
           
            { [event.target.name]:event.target.value} )  
                        
     }
       
    render() {
      
      return (
        <>
          <Button id='btn' variant="primary" onClick={this.handleShow}>
            Add Movies
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Movies</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>


 <Form.Group controlId="formGridAddress1">
   <Form.Label>Movie's title:</Form.Label>
   <Form.Control  type="text" name='title'placeholder="title"  value={this.state.title} onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group controlId="formGridAddress2">
    <Form.Label  >Movie's image:</Form.Label>
    <Form.Control type="text" name='image'value={this.state.image} onChange={this.handleChange}  placeholder="https://"/>
  </Form.Group>
  <Form.Group controlId="formGridAddress3">
    <Form.Label  >Rating:</Form.Label>
    <Form.Control type="number" name='rating' value={this.state.rating} onChange={this.handleChange}/>
  </Form.Group>

  <Form.Row>
    
  </Form.Row>

</Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary"  onClick={this.AddMymovie}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
  export default Example