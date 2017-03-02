import React from 'react'
import ReactDOM from 'react-dom'
import Rating from './Rating'
import { shallow } from 'enzyme'
it('has a span', () => {
  const app = shallow(<Rating stars={5} />)
  expect(app.find('span').length).toBe(1)
})
it('will print the received prop value and show it as a rating on 5', () => {
  const app = shallow(<Rating stars={3} />)
  expect(app.find('span').text()).toBe('3/5')
})
it('will have class red when rating is less than equal to 2', () => {
  const app = shallow(<Rating stars={2} />)
  expect(app.find('span').node.props.className).toBe('red')
})
it('will have class blue when rating is 3 or 4', () => {
  const app = shallow(<Rating stars={3} />)
  expect(app.find('span').node.props.className).toBe('blue')
})
it('will have class green when rating is equal to 5', () => {
  const app = shallow(<Rating stars={5} />)
  expect(app.find('span').node.props.className).toBe('green')
})

