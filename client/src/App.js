import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import SearchAlbum from './page/SearchAlbum'
import AlbumDetails from './page/AlbumDetails'
import Home from './page/Home'
import Collection from './page/Collection'
import Contact from './page/Contact'


class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/search" component={SearchAlbum} />
        <Route path="/albums/:id" component={AlbumDetails}/>
        <Route path="/collection" component={Collection}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App

