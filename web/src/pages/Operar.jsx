import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';

export const Operar = () => {

    const [depositar, setDepositar] = useState(false);
    const [retirar, setRetirar] = useState(false);

    const [values, handleInputChange, reset] = useForm({
        id: '',
        monto: ''
    })

    const { id, monto } = values;

    const handleDepositar = () => {
        setDepositar(true);
        setRetirar(false);
    }

    const handleRetirar = () => {
        setRetirar(true);
        setDepositar(false);
    }

    const handleDeposito = (e) => {
        e.preventDefault();
        alert("deposito");
        reset();
    }

    const handleRetiro = (e) => {
        e.preventDefault();
        alert("retiro");
        reset();
    }

    const handleCancelar = () => {
        setRetirar(false);
        setDepositar(false);
        reset();
    }



    return (
        <div className="container my-5">

            <h1 className="d-flex justify-content-center mt-1"> Opere su <strong className="ms-3 text-info">CUENTA</strong> </h1>
            <div className='d-flex justify-content-center mt-3'>
                <button onClick={handleDepositar} className="btn btn-info shadow-sm text-light"><strong>Depositar</strong></button>
                <button onClick={handleRetirar} className="btn btn-outline-info shadow-sm ms-1"><strong>Retirar</strong></button>
            </div>

            {(depositar || retirar) &&
                <div className='d-flex justify-content-center my-4'>
                    <form className="w-20 mx-auto border p-4" onSubmit={depositar ? handleDeposito : handleRetiro}>

                        <h5 className="d-flex justify-content-center mb-4"><strong>{depositar? 'DEPOSITAR': 'RETIRAR'}</strong></h5>

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
                            <label htmlFor="monto" className="form-label">Monto</label>
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
                            <button type="submit" className="btn btn-sm shadow-sm btn-outline-info">{depositar ? 'DEPOSITAR' : 'RETIRAR'}</button>
                            <button onClick={handleCancelar} className="btn btn-sm btn-secondary ms-1">Cancelar</button>
                        </div>
                    </form>
                </div>

            }
        </div>
    )
}
