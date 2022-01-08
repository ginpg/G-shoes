import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="navbar navbar-light bg-light" >
            <div className="container">
                <h1> 
                    <Link to={'/home'} className="text-light">
                        G - shoes
                    </Link> 
                </h1>
            </div>

            <Link to={"/checkout/address"}
                className="btn btn-outline-secondary nuevo-post d-block d-md-inline-block"
            >Cambiar dirección</Link>
        </nav>
     );
}
 
export default Header;