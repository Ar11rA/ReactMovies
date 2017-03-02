import React from 'react'
import ReactDOM from 'react-dom'
import Movielist from './Movielist'
import { shallow } from 'enzyme'
it('renders a single div tag', () => {
  const movieObj = [{ name: 'abc', theme: '#d4d4d4', releaseDate: '', rating: 5, description: 'abcdesc' }, { name: 'abcd', theme: '#d4d4d4', releaseDate: '', rating: 5, description: 'abcdesc2' }]
  const app = shallow(<Movielist movies={movieObj} />)
  expect(app.find('div').length).toBe(1)
})

it('has SingleMovies component as content', () => {
  const movieObj = [{ name: 'abc', theme: '#d4d4d4', releaseDate: '', rating: 5, description: 'abcdesc' }, { name: 'abcd', theme: '#d4d4d4', releaseDate: '', rating: 5, description: 'abcdesc2' }]
  const app = shallow(<Movielist movies={movieObj} />)
  expect(app.find('div').text()).toBe('<SingleMovie /><SingleMovie />')
})


