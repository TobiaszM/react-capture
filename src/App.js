import React from "react";
import AboutUS from './pages/AboutUs'
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <AboutUS />
        </Route>
        <Route path="/work">
          <OurWork/>
        </Route>
        <Route path="/contact">
          <ContactUs/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
