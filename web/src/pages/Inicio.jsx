import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { crearCuenta, success } from '../actions/bancoAction';
import { useForm } from '../hooks/useForm';

export const Inicio = () => {

    const [crear, setCrear] = useState(false);
    const producto = useSelector(store => store.banco.productoCreadoId);
    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        monto: 0,
    })

    const { monto } = values;

    const handleCrear = () => {
        dispatch(success({ productoCreadoId: null }))
        setCrear(true);
    }

    const handleCreacion = (e) => {
        e.preventDefault();
        dispatch(crearCuenta(monto));
        reset();
        setCrear(false);
    }

    const handleCancelar = () => {
        setCrear(false);
        reset();
    }


    return (
        <div className="container my-5">

            <h1 className="d-flex justify-content-center mt-1"> Bienvenido Sofkiano a <strong className="ms-3 text-info">SofkaBANK</strong> </h1>
            <div className='d-flex justify-content-center mt-3'>
                <button onClick={handleCrear} className="btn btn-info shadow-sm text-light"><strong>CREAR CUENTA</strong></button>
            </div>

            {
                producto&&
                <h6 className="d-flex justify-content-center text-danger mt-5"> Producto Creado: <strong className="ms-3 text-info">{producto}</strong> </h6>
            }

            {
                crear &&
                <div className='d-flex justify-content-center my-5'>
                    <form className="w-20 mx-auto border p-3" onSubmit={handleCreacion}>
                        <div className="mb-3">
                            <label htmlFor="monto" className="form-label">Monto Inicial:</label>
                            <input
                                type="number"
                                className="form-control shadow-sm"
                                id="monto"
                                aria-describedby="emailHelp"
                                name="monto"
                                value={monto}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <button type="submit" className="btn btn-sm btn-outline-info">CREAR</button>
                            <button onClick={handleCancelar} className="btn btn-sm btn-secondary ms-1">Cancelar</button>
                        </div>
                    </form>
                </div>

            }

        </div>
    )
}
