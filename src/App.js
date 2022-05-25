import React from 'react'
import Login from './Components/Login'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Home from './Components/Home.js'
import Detail from './Components/Detail'
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
function App() {
    return (
        <>
          <Router>
              <NavBar/>
              <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/detail/:id" component={Detail} />
                  <Redirect to="/" />
              </Switch>
              <Footer/>
          </Router>
        </>
    )
}

export default App
