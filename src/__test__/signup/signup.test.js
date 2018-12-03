// react libraries
import React from 'react';

// third-party libraries
import { Provider } from 'react-redux';

// enzyme third party libraries
import { shallow } from 'enzyme';

// component
import Signup from '../../components/signup/Signup';

// store
import configureStore from '../../store/configureStore';

describe('Signup Component', () => {
  test('renders the Signup Component', () => {
    const store = configureStore();
    const wrapper = shallow(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
