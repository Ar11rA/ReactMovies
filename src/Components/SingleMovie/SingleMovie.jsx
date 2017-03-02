import React  from 'react'
import moment from 'moment'
import './SingleMovie.css'
import Rating from '../Rating/Rating.jsx'

const SingleMovie = (props) => {
  return (
      <div id='main'>
        <div style={{ backgroundColor: props.movie.theme }}>
        </div>
        <div >
          <h3>{props.movie.name}</h3><br />
          <p class='description'>{props.movie.description}</p><br />
          Release Date : {moment(props.movie.releaseDate).format('DD MMMM YYYY')}
          <br /><br />
        </div>
        <div>
          <Rating stars={props.movie.rating} />
        </div>
      </div>
    ) 
}
export default SingleMovie