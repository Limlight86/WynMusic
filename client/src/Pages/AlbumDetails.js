import React, { Component } from 'react'
import axios from 'axios';
import './AlbumDetails.css'
import Navbar from '../components/Navbar'

class AlbumDetails extends Component {
  state = { album: {} }

  componentDidMount(){
    const id = this.props.location.search.slice(4)
    axios.get(`/album/detail/${id}`)
      .then(res => this.setState({ album:  res.data }))
  }

   millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000)
    var seconds = ((millis % 60000) / 1000).toFixed(0)
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
   }

  render(){
    console.log(this.state.album)
    return(
      <>
      <Navbar/>
        <h1>{this.state.album.artists && this.state.album.artists[0].name} - {this.state.album.name}</h1>
        {this.state.album.images && <img src={this.state.album.images[0].url} alt='album img' />} 
        <p> Label: {this.state.album.label}</p>
        <p>Release Date: {this.state.album.release_date}</p>
        <p>Spotify Popularity Score: {this.state.album.popularity}</p>
        <p>Total Tracks: {this.state.album.total_tracks}</p>
        {this.state.album.tracks && this.state.album.tracks.items.map((track,i) => {
            return(
              <div key={i}>
              <span className="track">{i+1} - {track.name} </span>  -  <span className="track">{this.millisToMinutesAndSeconds(track.duration_ms)}</span> - <span className="track"><a className="detail-a" target="_blank" rel='noreferrer noopener' href={track.preview_url}>Preview track</a></span>
              </div>
            )
        })}
        <p><a className="detail-a" href = {this.state.album.artists && 
          this.state.album.artists[0].external_urls.spotify}>
          Visit {this.state.album.artists && this.state.album.artists[0].name}'s Spotify Page</a></p>
      </>
    )
  }
}


export default AlbumDetails