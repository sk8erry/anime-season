import React, { Component } from 'react';
import Form from './components/Form'
import Animes from './components/Animes'
import './App.css';

const baseURL = 'https://api.jikan.moe/v3/season'
const year = '2019'
const season = 'winter'

class App extends Component {
  state = {
    animes: []
  }

  componentDidMount = async () => {
    const apiCall = await fetch(`${baseURL}/${year}/${season}`)
    const data = await apiCall.json()
    this.setState({
      animes: data.anime.sort(function(a,b){
        return b.score - a.score
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">AniSeason</h1>
        </div>
        <Animes animes={this.state.animes.splice(0,20)}/>
      </div>
    );
  }
}
//<Form />
//<Animes animes={this.state.animes.splice(0,10)}/>

export default App;
