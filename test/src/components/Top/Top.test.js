import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Top from './Top';

Enzyme.configure({ adapter: new Adapter() });

describe ('renders', () => {

it('render TOP component w/o props', () => {
    const component = shallow(<Top/>);
    expect(component.find('ul')).toHaveLength(1);
    expect(component.find('li')).toHaveLength(0);
}); 

it('render TOP component with props', () => {
    const component = shallow(<Top list={['item1', 'item2', 'item4', 'item5']}/>);
    expect(component.find('ul')).toHaveLength(1);
    expect(component.find('li')).toHaveLength(4);
}) 

it('match snapshot', () => {
    const component = shallow(<Top list={[1, 2, 3, 4]}/>);
    expect(component).toMatchSnapshot();
})

});