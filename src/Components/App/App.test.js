import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow, mount } from 'enzyme'
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
it('renders a div with Loading text when data is not fetched', () => {
  const app = shallow(<App />)
  expect(app.find('div').text()).toBe('Loading....')
})


