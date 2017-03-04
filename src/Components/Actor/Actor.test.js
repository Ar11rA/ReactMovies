import React from 'react'
import ReactDOM from 'react-dom'
import Actor from './Actor.jsx'
import { shallow } from 'enzyme'
it('renders a single div tag', () => {
  const actorArr = ['billy','joel','kevin','jane']
  const mockFunction = () => 1
  const app = shallow(<Actor actors={actorArr} change={mockFunction}/>)
  expect(app.find('div').length).toBe(1)
})
it('renders a single h4 tag with text Filter by actors', () => {
  const actorArr = ['billy','joel','kevin','jane']
  const mockFunction = () => 1
  const app = shallow(<Actor actors={actorArr} change={mockFunction}/>)
  expect(app.find('h4').text()).toBe('Filter by Actor : ')
})
it('renders a single select tag', () => {
  const actorArr = ['billy','joel','kevin','jane']
  const mockFunction = () => 1
  const app = shallow(<Actor actors={actorArr} change={mockFunction}/>)
  expect(app.find('select').length).toBe(1)
})
it('renders a select tag with actors as options', () => {
  const actorArr = ['billy','joel','kevin','jane']
  const mockFunction = () => 1
  const app = shallow(<Actor actors={actorArr} change={mockFunction}/>)
  expect(app.find('select').text()).toBe('Allbillyjoelkevinjane')
})



