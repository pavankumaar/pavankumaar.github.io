import React, { Component } from 'react'
import './HomePage.css'

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
        <div>
         Hello pavan
        </div>
      </>
    )
  }
}

export default HomePage
