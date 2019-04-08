import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from '../../../components/Button';
import App from '..';

/*beforeAll(() => {
  console.log(window.alert);
})

afterAll(() => {
  console.log(window.alert);
})*/

test('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should handle button click', () => {
  const alert = jest.spyOn(window, 'alert').mockImplementation(() => { });
  const app = shallow(<App />);
  const button = app.find(Button);

  button.first().simulate('click');

  expect(alert).toHaveBeenCalled();

  alert.mockRestore();
});
