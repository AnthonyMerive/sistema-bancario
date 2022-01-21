import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCuentas } from '../actions/bancoAction';

export const Cuentas = () => {

    const personas = useSelector(store => store.banco.productos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCuentas());
    }, [])

    return (
        <div className="container my-5 w-50 mx-auto">
            <h1 className="d-flex justify-content-center text-center my-5">
                Cuentas Registradas
            </h1>

            <table class="table mb-5">
                <thead>
                    <tr>
                        <th scope="col">Numero de cuenta</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {personas?.map(persona =>
                        <tr>
                            <th scope="row">{persona.personaId}</th>
                            <td>{persona.balance}</td>
                            <td>{persona.estado}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
