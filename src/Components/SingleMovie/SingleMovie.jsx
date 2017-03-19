import React  from 'react'
import moment from 'moment'
import './SingleMovie.css'
import Rating from '../Rating/Rating.jsx'

const SingleMovie = (props) => {
  let actorDisplay = ''
  if (props.movie.actors) {
    actorDisplay = props.movie.actors.map((actor) => <p key={actor}>{actor}</p>)
  }
  return (
    <div className='main'>
      <div style={{ backgroundColor: props.movie.theme }}>
      </div>
      <div >
        <h3>{props.movie.name}</h3><br />
        <p >{props.movie.description}</p><br />
        Release Date : {moment(props.movie.releaseDate).format('Do MMMM YYYY')}
        <br /><br />
        Actors:
        {actorDisplay}
      </div>
      <div>
        <Rating stars={props.movie.rating} />
      </div>
    </div>
  )
}
export default SingleMovie  
