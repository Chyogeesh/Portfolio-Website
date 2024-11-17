import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <h1>Welcome to My Portfolio</h1>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
