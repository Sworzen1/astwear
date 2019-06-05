import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
                <div className="contact-links" style={{width:'40%', margin:'auto',textAlign:'center'}}>
                <h1 style={{color: 'black'}}>Kontakt do nas</h1>
                    <i className="fa fa-facebook-square" aria-hidden="true"><p style={{fontSize:'50px',padding:'20px'}}> facebook</p> </i>
                    <i className="fa fa-instagram" aria-hidden="true"><p style={{fontSize:'50px',padding:'20px'}}> instagram</p></i>
                    <i className="fa fa-envelope" aria-hidden="true"><p style={{fontSize:'50px',padding:'20px'}}> poczta</p></i>
                </div>

    )
  }
}
