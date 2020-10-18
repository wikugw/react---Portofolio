import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
