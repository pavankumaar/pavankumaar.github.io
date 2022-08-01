import React, { Component } from 'react'
import './HomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-solid-svg-icons'


class HomePage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
       <div className="homepage-container">
         <div className="header">
          <div className="title">PAVAN KUMAR.</div>
          <div className="links">
           <ul>
            <li className="h-items">Contact</li>
            <li className="h-items">Github</li>
            <li className="h-items">Twitter</li>
           </ul>
          </div>
        </div>
        <div className="body">
         <div className="sidenav">
          <ul className="sidenav-list">
           <li>
            <FontAwesomeIcon icon={faClone} />
             <span className="item-name">UI clones</span>
           </li>
          </ul>
         </div>
        </div>
       </div>
      </>
    )
  }
}

export default HomePage
