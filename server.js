if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const path = require("path")
const app = express()
app.use(express.json())
app.use(express.static('public'))
const req = require('request') //required request to perform http requests to the api, named req because there are more than 1 request param/variable

const albumCollection = []
let removeId = 0

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET

let authOptions = { //this object exsists just to set the token for use in the code below
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) //these are headers, like in postman
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
}

app.get('/api/search/:query', (request, res) => { //this is using the express server to ping the spotify demo to get the requested JSON info, using the token - for SEARCH page

  req.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {

      var token = body.access_token;
      var options = {
        url: `https://api.spotify.com/v1/search?q=${request.params.query}&type=album&limit=50`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      req.get(options, function (error, response, body) {
        res.json(body.albums.items)
      });
    }
  });
})

app.get('/api/albums/:id', (request, res) => { //this is the GET for DETAILS page

  req.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {

      var token = body.access_token;
      var options = {
        url: `https://api.spotify.com/v1/albums/${request.params.id}`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      req.get(options, function (error, response, body) {
        res.json(body)
      });
    }
  });
})

//////////////////////////////////CODE for building / deleting your collection//////////////////////////////

app.get('/api/collection', (request, response) => {
  response.json(albumCollection)
})

app.post('/api/collection', (request, response) => {
  const addedAlbum = request.body
  if (addedAlbum.album_type) {
    albumCollection.push(addedAlbum)
    response.json(addedAlbum)
  } else {
    response.status(422).json({
      error: "album info required"
    })
  }
})

app.delete('/api/collection/:id', (request, response) => {

  const album = albumCollection.find(album => album.id === request.params.id)
  if (album && album.album_type) {
    const index = albumCollection.findIndex(e => e.id == album.id)
    albumCollection.splice(index, 1)
    response.status(202).json({
      success: `deleted ${album.id}`
    })
  } else {
    response.status(204)
  }
})

//////////////////////////////////CODE for building /deleting your collection//////////////////////////////


if (process.env.NODE_ENV === 'production') {
  // Serve any static files

  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

const port = process.env.PORT || 8080
app.listen(
  port,
  () => {
    console.log(`API listening on port ${port}...`)
  }
)