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
    axios.get('/api/collection').then(response => this.setState({collection: response.data}))
  }

  fetchAlbums = (event) => {
    fetch(`/api/search/${event.target.value}`)
      .then(response => response && response.json())
      .then(albums => {
        this.setState({ albums: albums })
      })
  }

  addCollection = (album) =>{
                axios.post('/api/collection', album)
                  .then(response => {
                    const { collection } = this.state
                    collection.push(response.data)
                    this.setState({ collection })
                  })
  }

  deleteAlbum = (id) =>{
    axios.delete(`/api/collection/${id}`)
    .then(response => {
       if(response.status === 202){
        let {collection} = this.state
        collection = collection.filter(album => album.id !== id)
        this.setState({collection})
       }
    })
    .catch(err => console.log(err))    
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
        <h1>{ this.state.artistName.length ? 'Search results for "' + this.state.artistName + '"' : 'Search for Albums by Artist' } </h1>
        <input id="search-button" type="text" onKeyDown={this.handleKeyDown}
        autoComplete="off"/>
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
                      !this.state.collection.map(album => album.id).includes(album.id) ?
                      <button onClick={ () => { this.addCollection(album) }}>
                        Add
                      </button> : <button onClick={() => this.deleteAlbum(album.id)}>Remove</button>
                    }
                    <button><Link to={`/albums/${album.id}`} target="_blank">Details</Link></button>
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
