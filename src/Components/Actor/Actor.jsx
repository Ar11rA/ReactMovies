import React, { Component } from 'react'
import './Actor.css'
class Actor extends Component {
  showMovies(e){
    this.props.change(e.target.value)
  }
  render() {
    const allActors = this.props.actors.map((actor) => <option key={actor}>{actor}</option>)
    return (
      <div>
      <h4>Filter by Actor : </h4>
      <select className='choose' onChange={this.showMovies.bind(this)}>
        {allActors}
      </select>
      </div>
    )
  }
}

export default Actor