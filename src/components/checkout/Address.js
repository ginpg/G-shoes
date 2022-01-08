import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { AddressAction } from '../actions/productoActions';
import { useHistory } from 'react-router-dom';

const Address = () => {
    
    const history = useHistory();
    /*const dispatch = useDispatch();

    */
    // nuevo state de producto
    const [ direccion, guardarDireccion] = useState()
    /*
    // producto a editar
    const productoeditar = useSelector(state => state.productos.productoeditar);
  
    // llenar el state automaticamente
    useEffect( () => {
        guardarProducto(productoeditar);
    }, [productoeditar]);

    // Leer los datos del formulario
    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    */
    
    const submitAddress = e => {
        e.preventDefault();

        //dispatch( AddressAction(producto) );
    
        history.push('/home');
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">

                        <form onSubmit={submitAddress}>
                            <div className="form-group">
                                <label>Ingrese su direccion</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Direccion"
                                    name="direccion"
                                    value={direccion}
                                    //onChange={onChangeFormulario}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-outline-secondary nuevo-post d-block d-md-inline-block"
                            >Guardar dirección</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Address;