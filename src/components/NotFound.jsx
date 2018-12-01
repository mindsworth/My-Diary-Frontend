// react libraries
import React from 'react';

import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>The page you request can not be found</h1>
    <Link to="/">Click here to go back to homepage</Link>
  </div>
);

export default NotFound;
