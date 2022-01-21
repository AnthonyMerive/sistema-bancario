import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { firebaseConfig } from '../services/firebase';
import { auth } from '../types/types';
import { success } from './bancoAction';


const app = initializeApp(firebaseConfig);
const authentication = getAuth();


export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(authentication,
            email,
            password
        ).then(({ user }) => {
            dispatch(loginSincrono(user.uid))
        }).catch(error => {
            console.log(error)
        })
    }
}

export const loginSincrono = (uid) => {

    return {
        type: auth.login,
        payload: {
            uid
        }
    }
}

export const logout = () => {

    return (dispatch) => {
        signOut(authentication)
            .then(user => {
                dispatch(logoutSincrono())
                // dispatch(success({ personas: null }))
                sessionStorage.clear();
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const logoutSincrono = () => {
    return {
        type: auth.logout
    }
}