import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';


import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Projects from './views/Projects';

class App extends Component {
  render() {
    return  (
        <BrowserRouter className="mainc">
          <Fragment>
            <Header/>
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projects" component={Projects} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </Fragment>
        </BrowserRouter>

    );
  }
}

export default App;
