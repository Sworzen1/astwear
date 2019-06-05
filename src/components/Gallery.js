import React, { Component } from 'react'
import { Grid, Cell, Tabs, Tab, Card, CardTitle, CardActions  } from 'react-mdl'

export default class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {activeTab:0}
  }
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
        {/* 1 project */}
          <Card shadow={5} style={{width: '256px', height: '256px', background: 'url(https://i.ytimg.com/vi/Vp7nW2SP6H8/maxresdefault.jpg) center / cover'}}>
            <CardTitle expand />
            <CardActions style={{height:'52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
              <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                Puszek
              </span>
            </CardActions>
          </Card>
        
        {/* 2 project */}
          <Card shadow={0} style={{width: '256px', height: '256px', background: 'url(https://i.ytimg.com/vi/Vp7nW2SP6H8/maxresdefault.jpg) center / cover'}}>
            <CardTitle expand />
            <CardActions style={{height:'52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
              <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                Puszek
              </span>
            </CardActions>
          </Card>
        
        {/* 3 project */}
          <Card shadow={0} style={{width: '256px', height: '256px', background: 'url(https://i.ytimg.com/vi/Vp7nW2SP6H8/maxresdefault.jpg) center / cover'}}>
            <CardTitle expand />
            <CardActions style={{height:'52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
              <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                Puszek
              </span>
            </CardActions>
          </Card>

          {/* 3 project */}
          <Card shadow={0} style={{width: '256px', height: '256px', background: 'url(https://i.ytimg.com/vi/Vp7nW2SP6H8/maxresdefault.jpg) center / cover'}}>
            <CardTitle expand />
            <CardActions style={{height:'52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
              <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                Puszek
              </span>
            </CardActions>
          </Card>
          </div>
      )
    } else if(this.state.activeTab === 1) {
      return(
        <div className="projects-grid">
        {/* 1 project */}
          <Card shadow={0} style={{width: '256px', height: '256px', background: 'url(https://i.ytimg.com/vi/Vp7nW2SP6H8/maxresdefault.jpg) center / cover'}}>
            <CardTitle expand />
            <CardActions style={{height:'52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
              <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                Puszek
              </span>
            </CardActions>
          </Card>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Nasze koszulki</Tab>
          <Tab>Indywidualne projekty</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
