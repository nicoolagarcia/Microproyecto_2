import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './css/App.css';
import { database } from './firebase.js';

library.add(faEnvelope, faLock);

function SignIn() {
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
	const handleGoogle = async () => {};
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
								<input id="email" name="email" type="email" required />
								<label htmlFor="#">Email</label>
							</div>
							<div className="input-contenedor">
								<FontAwesomeIcon icon="fa-solid fa-lock" className="i" />
								<input id="password" name="password" type="password" required />
								<label htmlFor="#">Contraseña</label>
							</div>
							<div className="olvidar">
								<label htmlFor="#">
									<input id="checkbox" name="checkbox" type="checkbox" />
									<a href="#">Has olvidado tu contraseña?</a>
								</label>
							</div>

							<div>
								<button type="submit">Acceder</button>
							</div>
						</form>

						<div>
							<button onClick={handleGoogle}>Acceder con Google</button>
							<div className="registrar">
								<p>
									No tienes cuenta?{' '}
									<Link to="/SignUp" replace>
										Crear Cuenta
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default SignIn;
