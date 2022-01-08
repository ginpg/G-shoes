import React, { Fragment, useEffect } from 'react';
import { Nav, Navbar, Row, Col, Card, Container,Button } from 'react-bootstrap'
import G from '../../assets/kids.jpg'
import { useHistory} from 'react-router-dom'

//Componentes reutilizables

const Detail = () => {

    const history = useHistory();

    return ( 
      <Fragment>
        <div className="app">
            <div className="details" key={'item._id'}>
              <div className="big-img">
                <img src={G}/>
              </div>

                <div className="box">
                    <div className="row">
                    <h2>{'item.title'}</h2>
                    <span>${'item.price'}</span>
                    </div>

                    <p>{'item.description'}</p>
                    <p>{'item.content'}</p>
                    <button className="cart">Add to cart</button>
                </div>
            </div>
          </div>
        </Fragment>
     );
}
 
export default Detail;