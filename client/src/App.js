import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Add from './pages/Add'
import Collection from './pages/Collection'
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Collection" component={Collection} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

