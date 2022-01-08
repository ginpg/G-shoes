import React, { Fragment, useEffect } from 'react';
import { Col, Card} from 'react-bootstrap'
import G from '../../assets/G.png'

const Product = () => {

    return ( 
      <Col>
      <Card className="product-card">
        <Card.Img variant="top" src={ G } className="image"/>
        <div class="middle">
          <div class="text">
            <a href="/detail" className="btn btn-secondary">See Details</a>
            <a href="#!" className="btn btn-primary mt-2">Add to Card</a>
          </div>
        </div>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
     );
}
 
export default Product;


