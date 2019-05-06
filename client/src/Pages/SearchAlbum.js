import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SearchAlbum.css'

class SearchAlbum extends Component {
  state = { albums: [],
            artistName: "",
            addedAlbum: {}}

  fetchAlbums = (event) => {
    fetch(`/search/${event.target.value}`)
      .then(response => response && response.json())
      .then(albums => {
        this.setState({ albums: albums })
      })
  }

  // addCollection = (e) =>{
  //               axios.post('/collection', addedAlbum)
  //                   .then(response => {
  //                       const {albumCollection} = state.props.addedAlbum
  //                       albumCollection.push(response.data)
  //                       this.setState({addedAlbum : })
  // }}

  handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      this.setState({artistName : e.target.value})
      this.fetchAlbums(e);
    }
  }

  render(){
    return(
      <React.Fragment>
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
                    <span>
                      {console.log(album)}
                    <button onClick={this.addCollection}>
                      <Link to={`/collection`} 
                      target="_blank" >Add</Link>
                    </button>
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