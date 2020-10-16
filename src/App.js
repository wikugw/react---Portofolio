import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
