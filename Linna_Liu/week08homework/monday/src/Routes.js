import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import ImageDetails from './components/ImageDetails'

const Routes = (
  <Router>
    <div>
      <Route component={ SearchForm } />
      <Route path="/search/:query" component={ SearchResults } />
      <Route path="/image/:id" component={ ImageDetails } />
    </div>
  </Router>
);

export default Routes;
