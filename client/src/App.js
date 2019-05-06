import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Add from './pages/Add'
import Collection from './pages/Collection'
import Contact from './pages/Contact';
// class App extends React.Component {
//   state = { serverMessage: '' }

//   componentDidMount(){
//     fetch('/api/demo')
//       .then(response => response.json())
//       .then(data => this.setState({ serverMessage: data.message }))
//   }

//   render(){
//     return (
//       <div id="demo">
//         <h1>Hello from client/src/App.js</h1>
//         <h1>{this.state.serverMessage}</h1>
//       </div>
//     )
//   }
// }

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Collection" component={Collection} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

