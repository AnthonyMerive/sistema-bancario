import { LOADED_FAILURE, LOADED_SUCCESS, LOADING } from "../types/types"

export const initialState = {
  loading: false,
  hasErrors: false,
  productoCreadoId: null,
  depositado: null,
  retirado: null,
  productoConsultado: null
}

export function bancoReducer(state = initialState, action) {

  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case LOADED_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        hasErrors: false
      }
    case LOADED_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      }
    default:
      return state
  }
}