import React from 'react';
import { shallow } from 'enzyme';
import Condition from 'client/components/Condition/Condition';
import renderer from 'react-test-renderer';

// test('With Enzyme, Place component not render rating section when no rating passed over', () => {
//   const place = { hehe: 'haha' };
//   const wrapper = shallow(
//     <Place place={place} />,
//   );
//   const p = wrapper.find('.rating');
//   expect(p.length).toBe(0);
// });

test('Task 1', () => {
  handleOnClickCheckbox = (value) => {
    this.props.setPriceRange(value);
  }
  const { condition } = this.props;
  const placeComponent = renderer
    .create(<Button onClick={this.handleOnClick} theme={Object.keys(condition).length === 1 ? 'homepageClickGrey' : 'homepageClick'} />)
    .toJSON();
  expect(placeComponent).toMatchSnapshot();
});
