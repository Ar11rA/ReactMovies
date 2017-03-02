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
    const actorArray = []
    getData('movies').then((res) => {
      let ctr = 0
      res.data.forEach((item) => {
        let tempArr = (item.actors)
        for (let iter1 = 0; iter1 < tempArr.length; iter1++) {
          let tempAct = tempArr[iter1]
          let flag = true
          for (let iter2 = 0; iter2 < actorArray.length; iter2++) {
            if (tempAct === actorArray[iter2]) {
              flag = false
              break
            }
          }
          if (flag) {
            actorArray[ctr++] = tempAct
          }
        }
      })
      this.setState({
        actors: actorArray,
        movies: res.data
      })
    })
  }
  updateMovieList(actor) {
    let searchedMovies = []
    this.state.movies.forEach((movie) => {
      const actorArr = movie.actors
      let flag = false
      for (let iter = 0; iter < actorArr.length; iter++) {
        if (actor === actorArr[iter]) {
          flag = true
          break
        }
      }
      if (flag)
        searchedMovies.push(movie)
    })
    this.setState({
      filteredMovies: searchedMovies
    })
  }
  render() {
    let movielist = ''
    if (this.state.filteredMovies.length)
      movielist = <Movielist movies={this.state.filteredMovies} />
    else
      movielist = <Movielist movies={this.state.movies} />

    if (this.state.actors.length === 0)
      return (<div>Loading....</div>)

    return (
      <div>
        <Actor actors={this.state.actors} change={this.updateMovieList.bind(this)} />
        {movielist}
      </div>
    )
  }
}
export default App
