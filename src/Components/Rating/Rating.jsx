import React, { Component } from 'react'
import './Rating.css'

class Rating extends Component {
  render() {
    const rating = this.props.stars
    let colorClass = ''
    if (rating <= 2)
      colorClass = 'red'
    else if (rating > 2 && rating <= 4)
      colorClass = 'blue'
    else
      colorClass = 'green'
    return (
      <p> Rating is  <span className={colorClass}>{this.props.stars}/5</span>
      </p>
    )
  }
}

export default Rating