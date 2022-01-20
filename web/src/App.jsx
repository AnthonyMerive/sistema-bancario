import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Consultar } from './pages/Consultar';
import { Inicio } from './pages/Inicio';
import { Operar } from './pages/Operar';

function App() {

  let auth = false;

  return (
    <div className='page-container'>

      <Navbar auth={auth} />

      <div className="content-wrap">

        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="consulta" exact element={<Consultar />} />
          <Route path="opera" exact element={<Operar />} />
          {/* <Route path="cuentas" exact element={auth ? <Favorites /> : <Navigate to="/" />} /> */}

        </Routes>

      </div>

      <Footer />
    </div>
  )
}

export default App
