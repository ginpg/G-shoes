import React, { Fragment, useEffect } from 'react';
import { Col, Card, Container} from 'react-bootstrap'
import home from '../../assets/home.jpg'
import men from '../../assets/men.jpg'
import women from '../../assets/women.jpg'
import kids from '../../assets/kids.jpg'
const Banner = (props) => {

    var background_image

    console.log(props.id)

    if (props.id == 'men') {background_image = men}
    else if (props.id == 'women'){background_image = women}
    else if (props.id == 'kids') {background_image = kids}
    else {background_image = home}

    return ( 
        <header className="banner" style={{ 
            backgroundImage: `url(${background_image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
            <Container>
            {props.id == 'home' ?
                <>
                <h1 className='banner_title'>G-shoes</h1>
                <h3 className='banner_subtitle'>Boots for everybody</h3>
                </>
                :
                <h1 className='banner_title'>{props.name}</h1>
            }
            </Container>
        </header>
     );
}
 
export default Banner;

