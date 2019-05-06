import React from 'react'
import axios from 'axios';
import "./Collection.css"
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

class Collection extends React.Component {

    state = { albums: [] }

    componentDidMount(){
      axios.get(`/collection`).then(res => this.setState({ albums:  res.data }))
    }

  render(){
      return(
        <>
        <Navbar/>
    <div id="collection">
      <h1>This is the collection page</h1>
      <div id="collection-body">
        <table draggable="false">
          <tbody>
            {
              this.state.albums.map(album => (
                <tr id="album-row">
                  <td id="collection-image">{album.images && <img src={album.images[2].url} className="album-cover-collection" alt='album img' />}</td>
                  <td id="collection-artist">{album.artists && album.artists[0].name}</td>
                  <td id="collection-album">{album.name}</td>
                  <td><button><Link to={`/album/detail/?id=${album.id}`} target="_blank">Details</Link></button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
    }
}
export default Collection
