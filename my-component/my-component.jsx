import React from 'react';
import { connect } from 'react-redux';

import classes from './my-component.scss';

export function MyComponent () {
  return (
    <div>MyComponent</div>
  );
}

export default connect()(MyComponent);