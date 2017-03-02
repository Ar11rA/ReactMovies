import React, { Component } from 'react'
class Actor extends Component {
  render() {
    const allActors = this.props.actors.map((actor)=> <div key={actor}>{actor}</div>)
    return (
      <div>
        {allActors}
      </div>
    )
  }
}

export default Actor