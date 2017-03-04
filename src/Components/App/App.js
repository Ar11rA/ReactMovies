import React, { Component } from 'react'
import './App.css'
import getData from './fetchDataApi.js'
import Actor from '../Actor/Actor.jsx'
import Movielist from '../Movielist/Movielist.jsx'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actors: [],
      movies: [],
      filteredMovies: []
    }
  }
  componentDidMount() {
    getData('movies').then((res) => {
      let actorArr = []
      res.data.forEach((item) => {
        actorArr.push(...new Set(item.actors))
      })
      actorArr = [...new Set(actorArr)]
      this.setState({
        actors: actorArr,
        movies: res.data
      })
    })

  }
  updateMovieList(actor) {
    let searchedMovies = []
    this.state.movies.forEach((movie) => {
      const actorArr = movie.actors
      if (actorArr.some(((elem) => actor === elem)))
        searchedMovies.push(movie)
    })
    if (actor === 'All') {
      this.setState({
        filteredMovies: this.state.movies
      })
    }
    this.setState({
      filteredMovies: searchedMovies
    })
  }
  render() {
    if (this.state.actors.length === 0) {
      return (<div id="bigloading">
        <div id="loading">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div id="lefthalf"></div>
        <div id="righthalf"></div>
      </div>)
    }
    let movielist = ''
    if (this.state.filteredMovies.length)
      movielist = <Movielist movies={this.state.filteredMovies} />
    else
      movielist = <Movielist movies={this.state.movies} />
    return (
      <div>
        <Actor actors={this.state.actors} change={this.updateMovieList.bind(this)} />
        {movielist}
      </div>
    )
  }
}
export default App
