import React from 'react'
import { useForm } from '../hooks/useForm';

export const Consultar = () => {

    const [values, handleInputChange, reset] = useForm({
        id: '',
    })

    const { id } = values;

    const handleConsulta = (e) => {
        e.preventDefault();

        reset();
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


        </div>
    )
}
