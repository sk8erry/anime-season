import React from 'react'
import Dropdown from './Dropdown'

class Form extends React.Component {
  state = {
    sort: [
      {
        id: 0,
        title: 'POPULARITY',
        selected: true,
        key: 'sort'
      },
      {
        id: 1,
        title: 'SCORE',
        selected: false,
        key: 'sort'
      },
      {
        id: 2,
        title: 'TRENDING',
        selected: false,
        key: 'sort'
      },
      {
        id: 3,
        title: 'LATEST',
        selected: false,
        key: 'sort'
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
    this.props.handleSortChange(temp[id].title)
    this.setState({
      [key]: temp
    })
  }

  render() {
    return(
      <div style={{textAlign: "right"}}>
        <Dropdown 
          title="Sort by "
          list={this.state.sort}
          resetThenSet={this.resetThenSet}
        />
      </div>
    )
  }
}

export default Form