import React, { Component } from 'react'
import './styles/dropdown.css'

class Dropdown extends Component{
  state = {
    listOpen: false,
    headerTitle: this.props.title
  }

  componentDidUpdate(){
    const { listOpen } = this.state
    setTimeout(() => {
      if(listOpen){
        window.addEventListener('click', this.close)
      }
      else{
        window.removeEventListener('click', this.close)
      }
    }, 0)
  }

  componentWillUnmount(){
    window.removeEventListener('click', this.close)
  }

  close = (timeOut) => {
    this.setState({
      listOpen: false
    })
  }

  selectItem(title, id, stateKey){
    this.setState({
      headerTitle: title,
      listOpen: false
    }, this.props.resetThenSet(id, stateKey))
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen
            ? <i class="fas fa-angle-up" style={{marginRight: "5px", position: "absolute", right: "5px"}}></i>
            : <i class="fas fa-angle-down" style={{marginRight: "5px", position: "absolute", right: "5px"}}></i>
          }
        </div>
        {listOpen && <ul className="dd-list" onClick={e => e.stopPropagation()}>
          {list.map((item)=> (
            <li className="dd-list-item" key={item.id} onClick={() => {this.selectItem(item.title, item.id, item.key)}}>{item.title} {item.selected && <i class="fas fa-check"></i>}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default Dropdown
