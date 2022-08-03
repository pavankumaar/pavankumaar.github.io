import React, { Component } from 'react'
import './Sidenav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-solid-svg-icons'

class Sidenav extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div className='sidenav'>
          <ul className='sidenav-list'>
            <li>
              <FontAwesomeIcon icon={faClone} />
              <span className='item-name'>UI clones</span>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Sidenav
