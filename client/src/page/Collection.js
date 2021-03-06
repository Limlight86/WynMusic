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
        <Navbar currentPath={this.props.match.path}/>
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
              this.state.albums.sort((a,b) => {
                  if (!a.artists || !a.artists[0] || !a.artists[0].name || !b.artists || !b.artists[0] || !b.artists[0].name){
                    return 0
                  }else if(a.artists[0].name.toLowerCase() < b.artists[0].name.toLowerCase()){
                    return -1
                  }else if(a.artists[0].name.toLowerCase() > b.artists[0].name.toLowerCase()){
                    return 1
                  }else{
                    return 0
                  }
                }).map((album, i) => (
                <tr id="album-row" key={i}>
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
  )}}
  
export default Collection
