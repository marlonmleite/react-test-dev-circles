import React from 'react'
import { shallow } from 'enzyme'
import Button from '../'

test('should render', () => {
  const button = shallow(<Button>btn</Button>)

  expect(button).toMatchSnapshot()
})

test('should handle click', () => {
  const onClick = jest.fn()
  const button = shallow(<Button onClick={onClick}>btn</Button>)

  button.simulate('click')

  expect(onClick).toHaveBeenCalled()
})

/*test.skip('should render button primary', () => {
  const button = shallow(<Button primary>primary</Button>)

  expect(button).toHaveStyleRule('background', '#61DAFB')
  expect(button).toHaveStyleRule('color', '#282C34')
})*/

test('should hover button', () => {
  const button = shallow(<Button>Save</Button>)

  expect(button).toHaveStyleRule('cursor', 'pointer', {
    modifier: ':hover'
  })
})

/*test('should handle change', () => {
  const event = { target: { value: 'asdf' } }
  const onChange = jest.fn()
  const button = shallow(<input onChange={onChange}></input>)

  button.simulate('change', event)

    expect(onChange).toHaveBeenCalledWith(event)
})*/