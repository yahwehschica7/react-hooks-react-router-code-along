import React from "react"
import { Route } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"

function App() {
  return ( 
    <div>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    
    </div>
  );
}

export default App