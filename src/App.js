import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Main from './Main';
import Slides from './components/Slides';

function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
