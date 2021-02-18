import React from "react";
import AboutUS from './pages/AboutUs'
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import {Switch, Route} from 'react-router-dom';
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <AboutUS />
        </Route>
        <Route exact path="/work">
          <OurWork/>
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
