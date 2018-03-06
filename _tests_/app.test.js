import React from 'react';
import axios from 'axios';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';
const testData = require('../data_test.js');
const MockAdapter = require('axios-mock-adapter');

configure({ adapter: new Adapter() });

describe('Photo Gallery App', () => {
  const mock = new MockAdapter(axios);
  const data = testData;

  mock.onGet('/api/photo').reply(200, data);

  it('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
