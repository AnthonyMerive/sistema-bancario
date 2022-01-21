import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/authAction.js'
import { Offcanvas } from './Offcanvas.jsx'

export const Navbar = ({ auth }) => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-dark ">
            <div className="container-fluid">

                <span className="navbar-brand text-info">
                    <h5>SofkaBANK</h5>
                </span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                style={{ textDecoration: 'none' }}
                                to="/">
                                <span className="nav-link active text-light" aria-current="page">Inicio</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                style={{ textDecoration: 'none' }}
                                to="consulta">
                                <span className="nav-link active text-light" aria-current="page">Consultar</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                style={{ textDecoration: 'none' }}
                                to="opera">
                                <span className="nav-link active text-light" aria-current="page">Operar</span>
                            </Link>
                        </li>

                        {!auth ?

                            <li style={{ cursor: 'pointer' }} className="nav-item">

                                <span 
                                data-bs-toggle="offcanvas" 
                                data-bs-target="#offcanvasRight" 
                                aria-controls="offcanvasRight" 
                                className="nav-link text-secondary" 
                                tabIndex="-1" aria-disabled="true" >Administracion</span>

                            </li>

                            :

                            <Fragment>
                                <li className="nav-item">
                                    <Link
                                        style={{ textDecoration: 'none' }}
                                        to="cuentas">
                                        <span className="nav-link text-secondary" >| Cuentas</span>
                                    </Link>
                                </li>
                                <li className="nav-item" style={{ cursor: 'pointer' }}>
                                        <span onClick={handleLogout} className="nav-link text-secondary" >| Salir</span>
                                </li>
                            </Fragment>
                            
                        }

                        <Offcanvas />

                    </ul>
                </div>



            </div>
        </nav>
    )
}