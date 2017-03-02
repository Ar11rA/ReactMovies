import React, { Component } from 'react'
import SingleMovie from '../SingleMovie/SingleMovie.jsx'
class Movielist extends Component {
  
  render() {
    const movies = this.props.movies.map((movie)=><SingleMovie movie={movie} />)
    return (
      <div>
        {movies}
      </div>
    )
  }
}

export default Movielist