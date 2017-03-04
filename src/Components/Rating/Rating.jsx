import React from 'react'
import './Rating.css'
const Rating = (props) => {
  const rating = props.stars
  let colorClass = ''
  if (rating <= 2)
    colorClass = 'red'
  else if (rating > 2 && rating <= 4)
    colorClass = 'blue'
  else
    colorClass = 'green'
  return (
    <p className='center-rating'> Rating is  <span className={colorClass}>{props.stars}/5</span>
    </p>
  )
}
export default Rating
