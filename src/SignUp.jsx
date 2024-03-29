import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './css/App.css';
import { database } from './firebase.js';

function SignUp() {
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
			});
	};
	return (
		<>
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script
					src="https://kit.fontawesome.com/7fd8378b69.js"
					crossOrigin="anonymous"
				></script>
				<script>{`src = 'script.js';`}</script>
				<link rel="stylesheet" href="css/App1.css" />
				<title>MetroGamer</title>
			</head>
			<body>
				<section>
					<div className="contenedor">
						<div className="formulario">
							<form onSubmit={handleSubmitSignUp} action="#">
								<h2>Crear Cuenta</h2>
								<div className="input-contenedor">
									<i className="fa-solid fa-circle-info"></i>
									<input id="nombre" name="nombre" type="nombre" required />
									<label htmlFor="#">Nombre</label>
								</div>
								<div className="input-contenedor">
									<i className="fa-solid fa-circle-info"></i>
									<input
										id="apellido"
										name="apellido"
										type="apellido"
										required
									/>
									<label htmlFor="#">Apellido</label>
								</div>
								<div className="input-contenedor">
									<i className="fa-solid fa-user"></i>
									<input id="usuario" name="usuario" type="usuario" required />
									<label htmlFor="#">Usuario</label>
								</div>
								<div className="input-contenedor">
									<i className="fa-solid fa-circle-info"></i>
									<input id="email" name="email" type="email" required />
									<label htmlFor="#">Email</label>
								</div>
								<div className="input-contenedor">
									<i className="fa-solid fa-lock"></i>
									<input
										id="password"
										name="password"
										type="password"
										required
									/>
									<label htmlFor="#">Contraseña</label>
								</div>
								<div className="input-contenedor">
									<i className="fa-solid fa-ghost"></i>
									<input id="juego" name="juego" type="juego" required />
									<label htmlFor="#">Videojuego Favorito</label>
								</div>
							</form>
							<div>
								<button type="submit">Listo</button>
								<div className="registrar">
									<p>
										Ya tienes cuenta?{' '}
										<Link to="/SignIn" replace>
											Iniciar Sesion
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</body>
		</>
	);
}

export default SignUp;
