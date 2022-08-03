import React, { Component } from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'
import Sidenav from '../../components/Sidenav/Sidenav'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <div className='homepage-container'>
          <Header />
          <div className='body'>
            <Sidenav />
          </div>
        </div>
      </>
    )
  }
}

export default HomePage
