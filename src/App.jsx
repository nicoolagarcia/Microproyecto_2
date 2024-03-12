/* import { useState } from 'react' */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './css/App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Inicio from './Inicio';
import Perfil from './Perfil';

library.add(faEnvelope, faLock);

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<SignIn />} />
					<Route path="/SignIn" element={<SignIn />} />
					<Route path="/SignUp" element={<SignUp />} />
					<Route path="/Inicio" element={<Inicio />} />
					<Route path="/Perfil" element={<Perfil />} />
					<Route path="*" element={<h1>Not Found </h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

/* 
  const [login, setLogin] =useState(false)
  
	const handleSubmitSignUp = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
			createUserWithEmailAndPassword(database, email, password)
				.then((data) => {
					console.log(data, 'authData');
					history('/Inicio');
				})
				.catch((err) => {
					alert(err.code);
					setLogin(true);
				});
	};
  const handleSubmitSignIn = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, 'authData');
          history('/Inicio');
        })
        .catch((err) => {
          alert(err.code);
        });
	};
	return (
		<>
			<head>
				<script
					src="https://kit.fontawesome.com/7fd8378b69.js"
					crossOrigin="anonymous"
				></script>
			</head>
			<section>
				<div className="contenedor">
					<div className="formulario">
						<form action="#">
							<h2>Iniciar Sesión</h2>
							<div className="input-contenedor">
								<FontAwesomeIcon icon="fa-solid fa-envelope" className="i" />
								<input type="email" required />
								<label htmlFor="#">Email</label>
							</div>
							<div className="input-contenedor">
								<FontAwesomeIcon icon="fa-solid fa-lock" className="i" />
								<input type="password" required />
								<label htmlFor="#">Contraseña</label>
							</div>
							<div className="olvidar">
								<label htmlFor="#">
									<input type="checkbox" />
									<a href="#">Has olvidado tu contraseña?</a>
								</label>
							</div>
							<div className="input-contenedor">
								<FontAwesomeIcon icon="fa-brands fa-facebook" className="i" />
								<FontAwesomeIcon icon="fa-solid fa-lock" className="i" />
								<input type="password" required />
								<label htmlFor="#">Contraseña</label>
							</div>
						</form>

						<div>
							<button>
								Acceder <a href="src/Inicio.html">si</a>
							</button>
							<div className="registrar">
								<p>
									No tienes cuenta? <a href="src/App1.html">Crear Cuenta</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
 */

export default App;
