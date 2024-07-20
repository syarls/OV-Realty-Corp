import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Properties from './Properties';
import PropertyDetails from './PropertyDetails'; // Create this component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Properties} />
        <Route path="/property/:id" component={PropertyDetails} />
      </Switch>
    </Router>
  );
};

export default App;
