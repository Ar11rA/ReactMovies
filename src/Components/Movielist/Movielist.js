import React, { Component } from 'react'
class Movielist extends Component {
  
  render() {
    const movies = this.props.movies.map((movie)=><div>{movie.id}</div>)
    return (
      <div>
        {movies}
      </div>
    )
  }
}

export default Movielist