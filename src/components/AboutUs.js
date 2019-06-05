import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'

export default class AboutUs extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4} style={{background:'grey'}}>
          <img
          style={{width:'100%'}}
          src="http://bi.gazeta.pl/im/6f/54/15/z22364271V,Printscreen.jpg"
          alt="obraz"
          />

      </Cell>
      <Cell col={8} style={{background:'red'}}>
xd
      </Cell>
      </Grid>
        
     
    )
  }
}
