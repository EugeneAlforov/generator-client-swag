import React from 'react';
import { connect } from 'react-redux';

import classes from './<%= fileName %>.scss';

function <%= componentName %> () {
    return (
      <div><%= componentName %></div>
    );
}

export default connect()(<%= componentName %>);