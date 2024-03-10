/* import { useState } from 'react' */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import 'App.css'

library.add(faEnvelope, faLock)

function App() {
/*   const [count, setCount] = useState(0) */

  return (
    <>
      <head>
        <script src="https://kit.fontawesome.com/7fd8378b69.js" crossOrigin="anonymous"></script>
      </head>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <section>
        <div className='contenedor'>
          <div className='formulario'>
            <form action='#'>
              <h2>Iniciar Sesión</h2>
              <div className='input-contenedor'>
                <FontAwesomeIcon icon="fa-solid fa-envelope" className='i'/>
                <input type='email' required/>
                <label htmlFor="#">Email</label>
              </div>
              <div className='input-contenedor'>
                <FontAwesomeIcon icon="fa-solid fa-lock" className='i'/>
                <input type="password" required/>
                <label htmlFor="#">Contraseña</label>
              </div>              
              <div className='olvidar'>
                <label htmlFor="#">
                  <input type="checkbox" />
                  <a href="#">Has olvidado tu contraseña?</a>
                </label>
              </div>
            </form>

            <div>
              <button>Acceder</button>
              <div className='registrar'>
                <p>No tienes cuenta? <a href="App1.html">Crear Cuenta</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
