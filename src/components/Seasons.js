import React from 'react'

class Seasons extends React.Component {
  state = {
    seleted: [true, false, false, false]
  }

  handleClick = (e) => {
    let list = document.getElementsByClassName("season-selected")
    for (let element of list) {
      element.className = "col-2 season-selection"
    }
    e.target.className = "col-2 season-selected"
    console.log(e.target.className)
  }

  render() {
    return(
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-2 season-selected" onClick={this.handleClick}>
            Winter 2019
          </div>
          <div className="col-2 season-selection" onClick={this.handleClick}>
            Fall 2018
          </div>
          <div className="col-2 season-selection" onClick={this.handleClick}>
            Summer 2018
          </div>
          <div className="col-2 season-selection" onClick={this.handleClick}>
            Spring 2018
          </div>
        </div>
      </div>
    )
  }
}

export default Seasons