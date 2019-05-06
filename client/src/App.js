import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import SearchAlbum from './pages/SearchAlbum'
import AlbumDetails from './pages/AlbumDetails'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'


class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/search" component={SearchAlbum} />
        <Route path="/album/detail" component={AlbumDetails}/>
        <Route path="/collection" component={Collection}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App

