import React from 'react';
import {
  mount,
  shallow,
} from 'enzyme';
import { expect } from 'chai';

import App from './App';
// import model from '../../../tests/model.json';

describe('<App />', () => {

  const _this = {
    state: {},
    props: {},
  };

  const defaultProps = {};

  const defaultWrapper = shallow(<App {...defaultProps} />);

  let verifiedMethods = {};

  it('renders a list item for each activity', () => {
    expect(defaultWrapper.find('h1').length).to.equal(1);
  });

});