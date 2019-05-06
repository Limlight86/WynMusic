import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import SearchAlbum from './Pages/SearchAlbum'
import AlbumDetails from './Pages/AlbumDetails'
import Home from './Pages/Home'
import Collection from './Pages/Collection'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/search" component={SearchAlbum} />
        <Route path="/album/detail" component={AlbumDetails}/>
        <Route path="/collection" component={Collection}/>
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App

