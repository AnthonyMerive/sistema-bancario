import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';

export const Inicio = () => {

    const [crear, setCrear] = useState(false);

    const [values, handleInputChange, reset] = useForm({
        monto: '',
    })

    const { monto } = values;

    const handleCrear = () => {
        setCrear(true);
    }

    const handleCreacion = (e) => {
        e.preventDefault();
        
        reset();
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
