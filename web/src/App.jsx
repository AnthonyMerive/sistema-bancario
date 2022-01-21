import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Consultar } from './pages/Consultar';
import { Cuentas } from './pages/Cuentas';
import { Inicio } from './pages/Inicio';
import { Operar } from './pages/Operar';

function App() {

  const [auth, setAuth] = useState(false);
    const id = useSelector(store => store.auth.uid);

    useEffect(() => {
        if (id) {
            setAuth(true)
        } else {
            setAuth(false)
        }
    }, [id])

  return (
    <div className='page-container'>

      <Navbar auth={auth} />

      <div className="content-wrap">

        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="consulta" exact element={<Consultar />} />
          <Route path="opera" exact element={<Operar />} />
          <Route path="cuentas" exact element={auth ? <Cuentas /> : <Navigate to="/" />} />

        </Routes>

      </div>

      <Footer />
    </div>
  )
}

export default App
