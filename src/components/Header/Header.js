import React, { Component } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import config from '../../config.json'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactPopup: false,
      copied: '',
    }
  }
  componentDidMount() {
    const self = this
    window.scrollTo(0, 0)
    window.addEventListener('mouseup', function (event) {
      var pol = document.getElementsByClassName('popup')
      if (event.target !== pol && event.target.parentNode !== pol) {
        self.setState({ contactPopup: false })
      }
    })
  }
  copyData(id, data) {
    navigator.clipboard.writeText(data)
    this.setState(
      {
        copied: id,
      },
      () =>
        setTimeout(() => {
          this.setState({
            copied: '',
          })
        }, 1500)
    )
  }
  render() {
    return (
      <>
        <div className='header'>
          <div className='title'>&lt; {config.name} /&gt;</div>
          <div className='links'>
            <ul>
              <li
                className='h-items contact'
                onClick={() => {
                  this.setState({ contactPopup: !this.state.contactPopup })
                }}
              >
                <div className='popup-container'>
                  <span>Contact</span>
                  <div style={{ display: this.state.contactPopup ? 'flex' : 'none' }} className='popup'>
                    {config.contactData.map((contact) => {
                      return (
                        <div className='contact-item'>
                          <div className='contact-title'>{contact.name}</div>
                          <div className='contact-data-copy'>
                            <div className='contact-data'>{contact.data}</div>
                            <div className={this.state.copied === contact.id ? 'contact-copy copied' : 'contact-copy'} onClick={() => this.copyData(contact.id, contact.data)}>
                              <FontAwesomeIcon icon={this.state.copied === contact.id ? faCheckCircle : faClipboard} />
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </li>
              <li className='h-items'>Github</li>
              <li className='h-items'>Twitter</li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Header
