import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './css/App.css';
import { database } from './firebase.js';

library.add(faEnvelope, faLock);

function Perfil() {
	return (
		<>
			<html lang="en">
				<head>
					<meta charSet="UTF-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<title>Perfil</title>
					<link rel="stylesheet" href="css/normalize.css" />
					<script
						src="https://kit.fontawesome.com/7fd8378b69.js"
						crossOrigin="anonymous"
					></script>
					<link rel="stylesheet" type="text/css" href="css/perfil.css" />
				</head>

				<body>
					<section className="seccion-perfil-usuario">
						<div className="perfil-usuario-header">
							<div className="perfil-usuario-portada">
								<div className="perfil-usuario-avatar">
									<img src="./img/perfil.jpg" alt="img-avatar" />
									<button type="button" className="boton-avatar">
										<i className="far fa-image"></i>
									</button>
								</div>
								<button type="button" className="boton-portada">
									<Link to="Inicio">Inicio</Link>
								</button>
							</div>
						</div>
						<div className="perfil-usuario-body">
							<div className="perfil-usuario-bio">
								<h3 className="titulo">Nombre y Apellido</h3>
								<p className="texto">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
							<div className="perfil-usuario-footer">
								<ul className="lista-datos">
									<li>
										<i className="icono fa-solid fa-envelope"></i> Email
									</li>
									<li>
										<i className="icono fa-solid fa-lock"></i> Contrasena
									</li>
									<li>
										<i className="icono fa-solid fa-user"></i> Usuario
									</li>
									<li>
										<i className="icono fa-solid fa-gamepad"></i>Club
									</li>
									<li>
										<i className="icono fa-solid fa-ghost"></i> Videojuego
										Favorito
									</li>
								</ul>
							</div>
						</div>
					</section>
				</body>
			</html>
		</>
	);
}
export default Perfil;
