import React from 'react'

class Seasons extends React.Component {
  handleClick = (e) => {
    let list = document.getElementsByClassName("season-selected")
    for (let element of list) {
      element.className = "col-2 season-selection"
    }
    e.target.className = "col-2 season-selected"
    this.props.handleSeasonChange(e)
  }

  render() {
    return(
      <div className="container">
        <div className="row justify-content-around">
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
        </div>
      </div>
    )
  }
}

export default Seasons