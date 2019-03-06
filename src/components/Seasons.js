import React from 'react'
import './Season.css'

class Seasons extends React.Component {
  state = {
    seasonYear: [
      {season: "WINTER", year: 2019, selected: true, id: 0},
      {season: "FALL", year: 2018, selected: false, id: 1},
      {season: "SUMMER", year: 2018, selected: false, id: 2},
      {season: "SPRING", year: 2018, selected: false, id: 3}
    ]
  }

  handleClick = (e) => {
    let list = document.getElementsByClassName("season-selected")
    for (let element of list) {
      element.className = "col-2 season-selection"
    }
    e.target.className = "col-2 season-selected"
    console.log(e.target)
    this.props.handleSeasonChange(this.state.seasonYear[e.target.id])
  }

  render() {
    return(
      <div className="season-container">
        {this.state.seasonYear.map(element => {
          return(
            <div key={element.id} id={element.id} className={element.selected ? "col-2 season-selected" : "col-2 season-selection"} onClick={this.handleClick}>
              {element.season}<br/>{element.year}
            </div>
          )
        })}
      </div>
    )
  }
}

/*
<div className="col-2 season-selected" onClick={this.handleClick}>
  WINTER 2019
</div>
<div className="col-2 season-selection" onClick={this.handleClick}>
  FALL 2018
</div>
<div className="col-2 season-selection" onClick={this.handleClick}>
  SUMMER 2018
</div>
<div className="col-2 season-selection" onClick={this.handleClick}>
  SPRING 2018
</div>
*/

export default Seasons