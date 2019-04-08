import React from 'react'
import { shallow } from 'enzyme'
import Input from '..'

test('should render', () => {
  const input = shallow(<Input value="a" onChange={jest.fn()} />)

  expect(input).toMatchSnapshot()
})

test('should handle change', () => {
  const event = { target: { value: 'asdf' } }
  const onChange = jest.fn()
  const input = shallow(<Input onChange={onChange} />)

  input.simulate('change', event)

  expect(onChange).toHaveBeenCalledWith('asdf')
})