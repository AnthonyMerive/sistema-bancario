import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCuenta, success } from '../actions/bancoAction';
import { useForm } from '../hooks/useForm';

export const Consultar = () => {

    const dispatch = useDispatch();
    const cuenta = useSelector(store => store.banco.productoConsultado);

    const [values, handleInputChange, reset] = useForm({
        id: '',
    })

    const { id } = values;

    const handleConsulta = (e) => {
        e.preventDefault();
        dispatch(fetchCuenta(id))
        reset();
    }

    const handleLimpiar = () => {
        dispatch(success({ productoConsultado: null }))
    }


    return (
        <div className="container my-5">

            <h1 className="d-flex justify-content-center mt-1"> Consulte su <strong className="ms-3 text-info">SALDO</strong> </h1>

            <div className='d-flex justify-content-center my-4'>
                <form className="w-20 mx-auto border p-4" onSubmit={handleConsulta}>
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">Identificador de la cuenta:</label>
                        <input
                            type="text"
                            className="form-control shadow-sm"
                            id="id"
                            aria-describedby="emailHelp"
                            name="id"
                            value={id}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                        <button type="submit" className="btn btn-small btn-outline-info">CONSULTAR</button>
                    </div>
                </form>
            </div>

            {cuenta &&
                <div className='d-flex justify-content-center my-4'>
                    <form className="w-20 mx-auto border p-5">
                        <div className="mb-3">
                            <label htmlFor="cuentaId" className="form-label"><strong>Cuenta N°:</strong></label>
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                id="cuentaId"
                                aria-describedby="emailHelp"
                                name="cuentaId"
                                value={cuenta?.personaId}
                                disabled
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cuentaBalance" className="form-label"><strong>Saldo:</strong></label>
                            <input
                                type="number"
                                className="form-control shadow-sm"
                                id="cuentaBalance"
                                aria-describedby="emailHelp"
                                name="cuentaBalance"
                                value={cuenta?.balance}
                                disabled
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cuentaEstado" className="form-label"><strong>Estado:</strong></label>
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                id="cuentaEstado"
                                aria-describedby="emailHelp"
                                name="cuentaEstado"
                                value={cuenta?.estado}
                                disabled
                            />
                        </div>

                        <div className="d-flex justify-content-center mt-5">
                            <button onClick={handleLimpiar} className="btn btn-sm btn-outline-secondary ms-1">Limpiar</button>
                        </div>
                    </form>

                </div>

            }


        </div>
    )
}
