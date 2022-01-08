import React, { Fragment, useEffect } from 'react';
import { Nav, Navbar, Row, Col, Card, Container,Button } from 'react-bootstrap'
import G from '../../assets/G.png'
import { useHistory} from 'react-router-dom'

//Componentes reutilizables
import Banner from '../elements/Banner.js'

const Home = () => {

    const history = useHistory();
    const goWomen = () => {
      history.push(`/women`);
    }
    const goMen = () => {
      history.push(`/men`);
    }
    const goKids = () => {
      history.push(`/kids`);
    }

    return ( 
      <Fragment>
   

        <Banner id = 'home' name='Shoes to everyone'/>

      <Navbar bg="light" className="justify-content-center">
          <Nav variant="tabs" className="category">
            <Nav.Link onClick={() => goWomen()}> Women</Nav.Link>
            <Nav.Link onClick={() => goMen()}>Men</Nav.Link>
            <Nav.Link onClick={() => goKids()}>Kids</Nav.Link>
          </Nav>
        </Navbar>

        </Fragment>
     );
}
 
export default Home;