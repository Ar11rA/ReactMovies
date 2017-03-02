import React from 'react'
import ReactDOM from 'react-dom'
import SingleMovie from './SingleMovie'
import { shallow } from 'enzyme'
it('renders 4 div tags', () => {
  const movieObj = { name: 'abc', theme: '#d4d4d4', releaseDate: '', rating: 5, description: 'abcdesc' }
  const app = shallow(<SingleMovie movie={movieObj} />)
  expect(app.find('div').length).toBe(4)
})
it('has h3 tag with text as movie name', () => {
  const movieObj = { name: 'abc', theme: '#d4d4d4', releaseDate: '', rating: 5, description: 'abcdesc' }
  const app = shallow(<SingleMovie movie={movieObj} />)
  expect(app.find('h3').text()).toBe('abc')
})
it('has p tag with text as movie description', () => {
  const movieObj = { name: 'abc', theme: '#d4d4d4', releaseDate: '', rating: 5, description: 'abcdesc' }
  const app = shallow(<SingleMovie movie={movieObj} />)
  expect(app.find('p').text()).toBe('abcdesc')
})
