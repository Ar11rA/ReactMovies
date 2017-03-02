import React from 'react'
import './Actor.css'
const Actor = (props) => {
  function showMovies(e) {
    props.change(e.target.value)
  }
  const allActors = props.actors.map((actor) => <option key={actor}>{actor}</option>)
  return (
    <div>
      <h4>Filter by Actor : </h4>
      <select className='choose' onChange={(e) => showMovies(e)}>
        {allActors}
      </select>
    </div >
  )
}
export default Actor