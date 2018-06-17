import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';
import Movie from './components/Movie';

const Routes = (
    <Router>
        <div>
            <h1>THE MOVIE DB - REACT</h1>
            <Route exact path="/" component={Home} />
            <Route path="/results/:query" component={ Results } />
            <Route exact path="/movie/:id" component={ Movie } />
        </div>
    </Router>
)

export default Routes;