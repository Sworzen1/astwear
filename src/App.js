import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header style={{color: 'black', fontSize: '20px'}} className="header-color" title={<Link style={{color: 'black', textDecoration: 'none'}} to="/">Astwear</Link>} scroll>
          <Navigation>
            <Link style={{color: 'black', fontSize: '20px'}} to="/AboutUs">O nas</Link>
            <Link style={{color: 'black', fontSize: '20px'}} to="/Gallery">Galeria</Link>
            <Link style={{color: 'black', fontSize: '20px'}} to="/Contact">Kontakt</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{color: 'black', textDecoration: 'none'}} to="/">Astwear</Link>}>
          <Navigation>
            <Link to="/AboutUs">O nas</Link>
            <Link to="/Gallery">Galeria</Link>
            <Link to="/Contact">Kontakt</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
          <div className="page-content" />
        </Content>
      </Layout>
    </div>
  );
  }
}

export default App;
