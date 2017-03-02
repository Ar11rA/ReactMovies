import React, { Component } from 'react'
class Actor extends Component {
  showMovies(e){
    console.log('3',e.target.value)
    this.props.change(e.target.value)
  }
  render() {
    const allActors = this.props.actors.map((actor) => <option key={actor}>{actor}</option>)
    return (
      <select onChange={this.showMovies.bind(this)}>
        {allActors}
      </select>
    )
  }
}

export default Actor