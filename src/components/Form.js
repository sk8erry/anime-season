import React from 'react'
import Dropdown from './Dropdown'

class Form extends React.Component {
  state = {
    fruit: [
      {
        id: 0,
        title: 'Apple',
        selected: false,
        key: 'fruit'
      },
      {
        id: 1,
        title: 'Orange',
        selected: false,
        key: 'fruit'
      },
      {
        id: 2,
        title: 'Grape',
        selected: false,
        key: 'fruit'
      },
      {
        id: 3,
        title: 'Pomegranate',
        selected: false,
        key: 'fruit'
      },
      {
        id: 4,
        title: 'Strawberry',
        selected: false,
        key: 'fruit'
      }
    ]
  }

  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  render() {
    return(
      <div style={{textAlign: "right"}}>
          <i className="fas fa-search"></i>
          <i className="fas fa-share-alt"></i>
          <Dropdown 
            title="Sort by "
            list={this.state.fruit}
            resetThenSet={this.resetThenSet}
          />
      </div>
    )
  }
}

export default Form