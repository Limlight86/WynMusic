import React from 'react'
import axios from 'axios';
import "./Collection.css"

class Collection extends React.Component {

    state = { albums: [] }

    componentDidMount(){
        axios.get(`/collection`)
          .then(res => this.setState({ album:  res.data }))
    }

  render(){
      return(
    <div id="collection">
    <h1>This is the collection page</h1>
    <div id="collection-body">
      <table draggable="false">
            <tbody>
            <tr id="album-row">
              <td id="collection-image">Album Image</td>
              <td id="collection-artist">Artist Name</td>
              <td id="collection-album">Album Name</td>
              <td>
              <button id="collection-details-button">Details</button>
              </td>
              </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
    }
}
export default Collection