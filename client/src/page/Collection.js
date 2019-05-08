import React from 'react'
import axios from 'axios';
import "./collection.css"
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

class Collection extends React.Component {

    state = { albums: [] }

    componentDidMount(){
      axios.get(`/api/collection`).then(res => this.setState({ albums:  res.data }))
    }

    deleteAlbum = (id) =>{
          axios.delete(`/api/collection/${id}`)
          .then(response => {
             if(response.status === 202){
              let {albums} = this.state
              albums = albums.filter(album => album.id !== id)
              this.setState({albums})
             }
          })
          .catch(err => console.log(err))    
  }

  render(){
      return(
        <>
        <Navbar/>
    <div id="collection">
      <h1 id="collection-header">My <span id="wm-collection">WynMusic</span> Collection</h1>
           {
            !this.state.albums.length && 
            <>
              <div id="empty-message">
                Your Record Collection is empty. <br/> Start adding to it below!
              </div>
              <Link to="/search"><button id="search-collection">Search for Albums</button></Link>
            </>
            }
      <div id="collection-body">
        <table draggable="false">
          <tbody>
            {
              this.state.albums.map(album => (
                <tr id="album-row">
                  <td id="collection-image">{album.images && <img src={album.images[2].url}             className="album-cover-collection" alt='album img' />}</td>
                  <td id="collection-artist">{album.artists && album.artists[0].name}</td>
                  <td id="collection-album">{album.name}</td>
                  <td id="button-column"><button className="collection-button"><Link to={`/albums/${album.id}`} target="_blank">Details</Link></button></td>
                  <td id="remove-column"><button className="collection-button" onClick={() => this.deleteAlbum(album.id)}>Remove</button></td>
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
