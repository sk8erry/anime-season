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
      genres
      source
      averageScore
      popularity
      airingSchedule { edges { node { timeUntilAiring } } }
      studios { edges { node { name } } }
      description
    }
  }
}
`

class App extends Component {
  state = {
    url: 'https://graphql.anilist.co',
    media: [],
    variables: {
      season: "SPRING",
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
  componentDidMount = async () => {
    this.getMedia()
  }

  getMedia = async () => {
    const data = await fetch(
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
    ).then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return
        } else {
          return response.json()
        }
      }
    ).catch(err => console.log('Fetch Error :-S', err))
  
    this.setState({media: data.data.Page.media})
    console.log(data)
    //console.log(data)
    //
    
    //recursively call getMedia if multipage
    //Currently disabled to allow better response time
    /*
    this.setState({
      media: [...this.state.media, ...data.data.Page.media]
    })
    if(data.data.Page.pageInfo.hasNextPage && false) {
      let variables = Object.assign({}, this.state.variables)
      variables.page += 1
      this.setState({variables})
      this.getMedia()
    } 
    this.setState({
      media: this.state.media.sort(function(a,b){
        return b.popularity - a.popularity
      })
    })
    */
  }

  handleSeasonChange = (newseason) => {
    console.log("arg",newseason)
    this.setState({
      media: []
    })
    let variables = Object.assign({}, this.state.variables)
    variables.season = newseason.season
    variables.seasonYear = newseason.year
    variables.page = 1
    this.setState({variables}, this.getMedia)
  }

  handleSortChange = (title) => {
    switch(title) {
      case "SCORE": {
        let variables = Object.assign({}, this.state.variables)
        variables.sort = "SCORE_DESC"
        this.setState({variables}, this.getMedia)
        break
      }

      case "POPULARITY": {
        let variables = Object.assign({}, this.state.variables)
        variables.sort = "POPULARITY_DESC"
        this.setState({variables}, this.getMedia)
        break
      }

      case "TRENDING": {
        let variables = Object.assign({}, this.state.variables)
        variables.sort = "TRENDING"
        this.setState({variables}, this.getMedia)
        break
      }

      default: break
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-controls">
          <h1 className="App-title">XINFAN</h1>
          <Seasons handleSeasonChange={this.handleSeasonChange}/>
          <Form handleSortChange={this.handleSortChange}/>
        </div>
        <Animes animes={this.state.media.slice(0,20)} />
      </div>
    )
  }
}
//<Form />
//<Animes animes={this.state.animes.splice(0,10)}/>

export default App;
