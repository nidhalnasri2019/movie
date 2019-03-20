import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import"./navbar.css"
 
class Rat extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    this.props.searchrating(nextValue)
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div className="rate">
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
export default Rat;