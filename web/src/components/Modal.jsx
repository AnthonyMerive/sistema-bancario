import React from 'react'
import { useDispatch } from 'react-redux';
import { success } from '../actions/bancoAction';

export const Modal = ({ depositado, retirado, setDeposito, setRetiro }) => {

    const dispatch = useDispatch();

    const handleReturnStates = () => { 
        dispatch(success({ depositado: null, retirado: null }));
        setDeposito(false);
        setRetiro(false);
    }
    

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{(depositado || retirado) ? "EXITO" : "FALLO"}</h5>
                        <button type="button" onClick={handleReturnStates}  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            (depositado || retirado) &&
                                depositado ?
                                <p>{depositado}</p>
                                : retirado ?
                                    <p>{retirado}</p>
                                    :
                                    <p>No fue posible realizar la operacion, intentelo mas tarde</p>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={handleReturnStates} className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
