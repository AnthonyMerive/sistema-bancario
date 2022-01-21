import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { depositar, retirar } from '../actions/bancoAction';
import { Modal } from '../components/Modal';
import { useForm } from '../hooks/useForm';

export const Operar = () => {

    const [deposito, setDeposito] = useState(false);
    const [retiro, setRetiro] = useState(false);
    const depositado = useSelector(store => store.banco.depositado);
    const retirado = useSelector(store => store.banco.retirado)
    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        id: '',
        monto: ''
    })

    const { id, monto } = values;

    const handleDepositar = () => {
        setDeposito(true);
        setRetiro(false);
    }

    const handleRetirar = () => {
        setRetiro(true);
        setDeposito(false);
    }

    const handleDeposito = (e) => {
        e.preventDefault();
        dispatch(depositar(id, monto));
        reset();
    }

    const handleRetiro = (e) => {
        e.preventDefault();
        dispatch(retirar(id, monto));
        reset();
    }

    const handleCancelar = () => {
        setRetiro(false);
        setDeposito(false);
        reset();
    }

    return (
        <div className="container my-5">

            <h1 className="d-flex justify-content-center mt-1"> Opere su <strong className="ms-3 text-info">CUENTA</strong> </h1>

            {(deposito || retiro) ?
                <div className='d-flex justify-content-center my-4'>
                    <form className="w-20 mx-auto border p-4" onSubmit={deposito ? handleDeposito : handleRetiro}>

                        <h5 className="d-flex justify-content-center mb-4"><strong>{deposito ? 'DEPOSITAR' : 'RETIRAR'}</strong></h5>

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
                            <button
                                type="submit"
                                className="btn btn-sm shadow-sm btn-outline-info"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                {deposito ? 'DEPOSITAR' : 'RETIRAR'}
                            </button>
                            <button onClick={handleCancelar} className="btn btn-sm btn-secondary ms-1">Cancelar</button>
                        </div>
                    </form>
                </div>

                :

                <div className='d-flex justify-content-center mt-3'>
                    <button
                        onClick={handleDepositar}
                        className="btn btn-info shadow-sm text-light"
                    >
                        <strong>Depositar</strong>
                    </button>
                    <button onClick={handleRetirar} className="btn btn-outline-info shadow-sm ms-1"><strong>Retirar</strong></button>
                </div>

            }

            <Modal
                depositado={depositado}
                retirado={retirado}
                setDeposito={setDeposito}
                setRetiro={setRetiro} />
        </div>
    )
}
