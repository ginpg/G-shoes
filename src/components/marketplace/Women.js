import React, { Fragment, useEffect } from 'react';
import { Nav, Navbar, Row, Col, Card, Container,Button } from 'react-bootstrap'
import G from '../../assets/G.png'
import { useHistory} from 'react-router-dom'

//Componentes reutilizables
import Product from '../elements/Product.js'
import Banner from '../elements/Banner.js'

const Template = () => {

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
        
        <Banner id = 'women' name='Shoes for women'/>

        <Navbar bg="light" className="justify-content-center">
          <Nav variant="tabs" className="category">
            <Nav.Link onClick={() => goWomen()} active> Women</Nav.Link>
            <Nav.Link onClick={() => goMen()}>Men</Nav.Link>
            <Nav.Link onClick={() => goKids()} >Kids</Nav.Link>
          </Nav>
        </Navbar>

        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 10 }).map((_, idx) => (
              <Product/>
            ))}
        </Row>

        </Fragment>
     );
}
 
export default Template;