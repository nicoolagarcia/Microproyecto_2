import { useState } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import './css/App.css';
import { database } from './firebase.js';

library.add(faEnvelope, faLock);

function SingIn() {
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
						<form onSubmit={handleSubmitSignIn} action="#">
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
							<button type="submit">
								Acceder <a href="src/Inicio.html">si</a>
							</button>
							<div className="registrar">
								<p>
									No tienes cuenta?{' '}
									<Link to="SignUp" /* src/App1.html */>Crear Cuenta</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default SingIn;
