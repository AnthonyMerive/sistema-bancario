import Swal from "sweetalert2";
import { LOADED_FAILURE, LOADED_SUCCESS, LOADING } from "../types/types"

const URL_COMMANDS = 'http://localhost:8081/user-bank';
const URL_QUERIES = 'http://localhost:8081/personas';

export const loading = () => ({ type: LOADING })

export const failure = () => ({ type: LOADED_FAILURE })

export const success = payload => ({
    type: LOADED_SUCCESS,
    payload
});

//Actions a traves de commands:

export function crearCuenta(montoInicial) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_COMMANDS}/crear-persona`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "balanceInicial": parseFloat(montoInicial)
                      })
                }
            )
            const data = await response.text();
            dispatch(success({ productoCreadoId: data }));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function depositar(id, monto) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_COMMANDS}/depositar`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "personaId": id,
                        "monto": parseFloat(monto)
                      })
                }
            )
            const data = await response.text();
            dispatch(success({ depositado: data }));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function retirar(id, monto) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_COMMANDS}/retirar`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "personaId": id,
                        "monto": parseFloat(monto)
                      })
                }
            )
            const data = await response.text();
              dispatch(success({ retirado: data }));
        } catch (error) {
            dispatch(failure())
        }
    }
}

//Actions a traves de Queries:

export function fetchCuenta(id) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_QUERIES}/get-persona/${id}`)
            const data = await response.json()
            dispatch(success({ productoConsultado: data }))
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function fetchCuentas() {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_QUERIES}`)
            const data = await response.json()
            dispatch(success({ productos: data }))
        } catch (error) {
            dispatch(failure())
        }
    }
}
