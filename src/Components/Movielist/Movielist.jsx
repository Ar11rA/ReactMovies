import React from 'react'
import SingleMovie from '../SingleMovie/SingleMovie.jsx'
const Movielist = (props) => {
  const movies = props.movies.map((movie,index) => <SingleMovie key={index} movie={movie} />)
  return (
    <div className='movie-container'>
      {movies}
    </div>
  )
}
export default Movielist