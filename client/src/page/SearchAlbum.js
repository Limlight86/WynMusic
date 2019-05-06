import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SearchAlbum.css'
import Navbar from '../components/Navbar'
import axios from 'axios'

class SearchAlbum extends Component {
  state = {
            albums: [],
            artistName: "",
            collection: []
          }

  componentDidMount(){
    axios.get('/collection').then(response => this.setState({collection: response.data}))
  }

  fetchAlbums = (event) => {
    fetch(`/search/${event.target.value}`)
      .then(response => response && response.json())
      .then(albums => {
        this.setState({ albums: albums })
      })
  }

  addCollection = (album) =>{
                axios.post('/collection', album)
                  .then(response => {
                    const { collection } = this.state
                    collection.push(response.data)
                    this.setState({ collection })
                  })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      this.setState({artistName : e.target.value})
      this.fetchAlbums(e);
    }
  }

  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <h1>{ this.state.artistName.length ? 'Search results for "' + this.state.artistName + '"' : 'Search for Albums' } </h1>
        <input id="search-button" type="text" onKeyDown={this.handleKeyDown}
        autocomplete="off"/>
        <div id="results">
          {
            this.state.albums.map((album, i) => {
              return(
                  <div className="album" key={i}>
                    <h4>{album.name}</h4>
                    <img src={album.images[1].url} alt="album-art"/>
                    <span id="button-span">
                      {console.log(album)}
                    {
                      !this.state.collection.map(album => album.id).includes(album.id) &&
                      <button onClick={ () => { this.addCollection(album) }}>
                        Add
                      </button>
                    }
                    <button><Link to={`/album/detail/?id=${album.id}`} target="_blank">Details</Link></button>
                    </span>
                  </div>
              )
            })
          }
        </div>
      </React.Fragment>
    )
  }
}

export default SearchAlbum