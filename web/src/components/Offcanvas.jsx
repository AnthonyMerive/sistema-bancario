import React from 'react'
import { useSelector } from 'react-redux'
import { Bienvenida } from './Bienvenida';
import Login from './Login'

export const Offcanvas = () => {

    const id = useSelector(store => store.auth.uid);

    return (

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">
                    {id? 'BIENVENIDO' : 'LOGIN' }
                </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {
                    id ?
                    <Bienvenida />
                    : 
                    <Login />
                }
            </div>
        </div>
    )
}