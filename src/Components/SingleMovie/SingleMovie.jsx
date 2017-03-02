import React, { Component } from 'react'
import moment from 'moment'
import './SingleMovie.css'
import Rating from '../Rating/Rating.jsx'
class SingleMovie extends Component {
  render() {
    return (
      <div id='main'>
        <div style={{ backgroundColor: this.props.movie.theme }}>
        </div>
        <div >
          <h3>{this.props.movie.name}</h3><br />
          <p class='description'>{this.props.movie.description}</p><br />
          Release Date : {moment(this.props.movie.releaseDate).format('DD MMMM YYYY')}
          <br /><br />
        </div>
        <div>
          <Rating stars={this.props.movie.rating} />
        </div>
      </div>
    )
  }
}

export default SingleMovie