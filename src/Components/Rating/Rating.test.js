import React from 'react'
import ReactDOM from 'react-dom'
import Rating from './Rating'
import { shallow } from 'enzyme'
it('has a span', () => {
  const app = shallow(<Rating stars={5}/>)
  expect(app.find('span').length).toBe(1)
})
