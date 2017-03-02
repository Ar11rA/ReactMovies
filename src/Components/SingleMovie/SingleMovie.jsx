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
          Name : {this.props.movie.name}<br />
          Description : {this.props.movie.description}<br />
          Release Date : {moment(this.props.movie.releaseDate).format('MMMM D YYYY')}
          <br /><br />
        </div>
        <div>
          <Rating stars = {this.props.movie.rating} />
        </div>
      </div>
    )
  }
}

export default SingleMovie