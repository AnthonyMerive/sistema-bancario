import { useDispatch } from 'react-redux';
import { loginEmailPassword } from '../actions/authAction';
import { useForm } from '../hooks/useForm';

export default function Login() {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginEmailPassword(email, password))
        reset();
    }


    return (<>
        <div className="container mt-2">
            <form className="w-50 mx-auto" onSubmit={handleLogin}>
                <h4 className="d-flex justify-content-center text-center text-info my-5">
                <strong>ADMINISTRADOR</strong>
                </h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                    <input
                        type="email"
                        className="form-control shadow-sm"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control shadow-sm"
                        id="exampleInputPassword1"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="d-flex align-items-center flex-column mt-5">
                    <button type="submit" className="btn btn-outline-info">Login</button>
                </div>
            </form>
        </div>
    </>)
}