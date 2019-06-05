import React from 'react'
import { Grid, Cell } from 'react-mdl'


class LandingPage extends React.Component {
    render() {
        return(
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                    src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png" 
                    alt="logo"
                    style={{height: '250px'}} />
                    <div className="banner-text">
                        <h1>AstWear</h1>

                        <hr style={{borderTop: '5px dotted white', width:'70%',margin:'auto'}}/>
                        <p>opis stronki</p>
                        <div className="social-links">
                            <a href="http://facebook.pl" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true" />
                            </a>
                            <a href="http://instagram.pl" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default LandingPage