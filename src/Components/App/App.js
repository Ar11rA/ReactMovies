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
      movies: []
    }
  }
  componentDidMount() {
    console.log('did mount')
    const actorArray = []
    getData().then((res) => {
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
    const prevMovies = this.state.movies
    console.log(prevMovies)
  }
  render() {
    console.log('1', this.state.actors)
    if (this.state.actors.length === 0)
      return (<div>Loading....</div>)
    else {
      return (
        <div>
          <Actor actors={this.state.actors} onChange={this.updateMovieList.bind(this)} />
          <Movielist movies={this.state.movies}/>
        </div>
      )
    }
  }
}

export default App
