import React, { Component } from 'react'
import './App.css'
import getData from './fetchDataApi.js'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actors: [],
      movies: []
    }
  }
  componentDidMount() {
    const actorArray = [], movieArray = []
    getData().then((res) => {
      let ctr = 0
      movieArray.push(res.data)
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
        movies: movieArray
      })
    })
  }
  render() {
    return (
      <div>
        <Actor actors={this.props.actors} onChange={this.updateMovieList.bind(this)} />

      </div>
    )
  }
}

export default App
