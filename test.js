import 'babel-polyfill';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

class MyComponent extends React.Component {
  
  componentDidMount() {
    this.ref.classList.add('test');
  }
  
  render() {
    return (
      <div>
        <div ref={ el => { this.ref = el; }}></div>
      </div>
    );
  }
}

test('issue', () => {
    
  let wrapper = mount(<MyComponent />);

  // element with "test" class is visible in markup
  console.log(wrapper.html()); 

  // returns 0
  expect(wrapper.find('.test').length).toBe(1);

  // still returns 0
  // wrapper.update();
  // expect(wrapper.find('.test').length).toBe(1);
});