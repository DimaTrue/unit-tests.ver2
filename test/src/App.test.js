import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import Top from './components/Top/Top';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const Wrapper = shallow(<App/>);
  expect(Wrapper.find(Top)).toHaveLength(1)
});

it('call fn', () => {
  const fnMock = jest.fn();
  const wrapper = shallow(<App fn={fnMock} />);
  wrapper.find('button').simulate('click');
  expect(fnMock.mock.calls.length).toBe(1);
  expect(wrapper.state().count).toBe(1);
});