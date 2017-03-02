import React from 'react'
import SingleMovie from '../SingleMovie/SingleMovie.jsx'
const Movielist = (props) => {
  const movies = props.movies.map((movie) => <SingleMovie movie={movie} />)
  return (
    <div className='movie-container'>
      {movies}
    </div>
  )
}
export default Movielist