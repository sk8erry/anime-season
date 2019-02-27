import React, { Component } from 'react';
import Form from './components/Form'
import Animes from './components/Animes'
import './App.css';
import Seasons from './components/Seasons'

var query = `
query ($season: MediaSeason, $seasonYear: Int, $page: Int, $perPage: Int, $sort: [MediaSort]) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (season: $season, seasonYear: $seasonYear, sort: $sort) {
      id
      title {
        romaji
        native
      }
      season
      startDate {
        year
        month
      }
      genres
      status
      averageScore
      coverImage {
        large
      }
      source
      averageScore
      popularity
      airingSchedule { edges { node { timeUntilAiring } } }
      studios { edges { node { name } } }
    }
  }
}
`

class App extends Component {
  state = {
    url: 'https://graphql.anilist.co',
    media: [],
    variables: {
      season: "WINTER",
      seasonYear: 2019,
      page: 1,
      perPage: 50,
      sort: "POPULARITY_DESC"
    }
  }
  /*
  this.setState({
      animes: data.anime.sort(function(a,b){
        return b.score - a.score
      })
    })
  */
  componentDidMount = () => {
    this.getMedia()
  }

  getMedia = async () => {
    console.log("in getting media",this.state.variables)
    const apiCall = await fetch(
      this.state.url, 
      {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: this.state.variables
        })
      }
    )

    const data = await apiCall.json()

    this.setState({
      media: [...this.state.media, ...data.data.Page.media]
    })
    
    if(data.data.Page.pageInfo.hasNextPage) {
      let variables = Object.assign({}, this.state.variables)
      variables.page += 1
      this.setState({variables})
      this.getMedia()
    } //recursively call getMedia if multipage
    /*
    this.setState({
      media: this.state.media.sort(function(a,b){
        return b.popularity - a.popularity
      })
    })
    */
    console.log("in getting media", this.state.media)
  }

  handleSeasonChange = async (e) => {
    let newseason = e.target.innerHTML.split(" ")
    let variables = Object.assign({}, this.state.variables)
    variables.season = newseason[0]
    variables.seasonYear = parseInt(newseason[1])
    variables.page = 1
    await this.setState({variables})
    this.setState({
      media: []
    })
    this.getMedia()
  }

  render() {
    console.log(this.state.media)
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">SZBZLJ</h1>
        </div>
        <div>
          <Seasons handleSeasonChange={this.handleSeasonChange}/>
        </div>
        <div className="container py-3">
          <div className="row justify-content-center" style={{color: "rgb(9, 44, 100)", fontSize: "30px"}}>
            <div className="col-12" style={{textAlign: "right"}}>
              <Form />
            </div>
          </div>
        </div>
        <Animes animes={this.state.media.slice(0,20)} />
      </div>
    );
  }
}
//<Form />
//<Animes animes={this.state.animes.splice(0,10)}/>

export default App;
