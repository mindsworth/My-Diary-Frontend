// react libraries
import React from 'react';

// third-party libraries
import { Provider } from 'react-redux';

// enzyme third party libraries
import { shallow } from 'enzyme';

// component
import Home from '../../components/home/Home';

// store
import configureStore from '../../store/configureStore';

describe('Home Component', () => {
  test('renders the Home Component', () => {
    const store = configureStore();
    const wrapper = shallow(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
