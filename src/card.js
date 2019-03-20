import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

import './card.css'
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
    
    render() { 
      const {item}=this.props
        return ( <div className='carte'>
    
    <Card style={{ width: '18rem' }}>
  <Card.Img id ="img"variant="top" src={item.image} />
  <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={item.rating}
        />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    
    
  </Card.Body>
</Card>; 
  
  
  
        </div> );
    }
}
 
export default Item;