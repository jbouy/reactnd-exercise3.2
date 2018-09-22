import React, {Component} from 'react';

class MovieCard extends Component {
  render() {
    return (
      <div>
      	<h2>{this.props.movie.name}</h2>
      </div>
    )
  }
}

export default MovieCard;