import { Link, useNavigate } from 'react-router-dom';
function Inicio() {
	const navigate = useNavigate();
	navigate('/SignIn');
	return (
		<>
			<html lang="en">
				<head>
					<meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<title>MetroGamer</title>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
						rel="stylesheet"
					/>
					<link rel="stylesheet" href="css/normalize.css" />
					<link rel="stylesheet" href="css/styles.css" />
					<script
						src="https://kit.fontawesome.com/7fd8378b69.js"
						crossOrigin="anonymous"
					></script>
				</head>

				<body>
					<header className="header inicio">
						<div className="contenedor contenido-header">
							<div className="barra">
								<a href="/">
									<img src="img/logo.svg" alt="Logotipo de Bienes Raices" />
								</a>
								<div className="mobile-menu">
									<a href="#navegacion">
										<i className="fa-solid fa-bars"></i>
									</a>
								</div>
								<nav id="navegacion" className="navegacion">
									<Link to="Inicio">Inicio</Link>
									<a href="#clubes">Clubes</a>
									<Link to="Perfil">Perfil</Link>
								</nav>
							</div>
						</div>
					</header>

					<div className="linea-horizontal"></div>
					<h1 className="arreglar">
						Desata tu poder gamer en nuestros exclusivos clubes de videojuegos
					</h1>
					<div className="linea-horizontal"></div>

					<section className="section-principal">
						<div className="section-contenedor">
							<div className="mini-section">
								<h2>Informacion principal</h2>
								<i className="fa-solid fa-arrow-right"></i>
							</div>
							<p className="parrafo">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Inventore cupiditate aperiam asperiores eos consequuntur
								blanditiis commodi debitis nisi iste repellat fuga rem et saepe,
								sequi reiciendis voluptates facere, est dicta?
							</p>
						</div>

						<div className="section2-contenedor">
							<p className="parrafo">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Inventore cupiditate aperiam asperiores eos consequuntur
								blanditiis commodi debitis nisi iste repellat fuga rem et saepe,
								sequi reiciendis voluptates facere, est dicta?
							</p>
							<div className="mini-section">
								<h2>Quienes somos?</h2>
								<i className="fa-solid fa-arrow-right fa-flip-horizontal"></i>
							</div>
						</div>
					</section>

					<main className="seccion contenedor" id="clubes">
						<div className="linea-horizontal"></div>
						<h2 className="fw-300 centrar-texto">Clubes</h2>
						<div className="linea-horizontal"></div>

						<div className="contenedor-anuncios">
							{/* ... Contenido de los clubes ... */}
						</div>
					</main>

					<footer className="site-footer seccion">
						<div className="contenedor contenedor-footer">
							<nav className="navegacion">
								<a href="#">Inicio</a>
								<a href="#">Clubes</a>
								<a href="#">Perfil</a>
							</nav>
							<p className="copyright">
								Todos los Derechos Reservados 2024 &copy;{' '}
							</p>
						</div>
					</footer>
				</body>
			</html>
		</>
	);
}

export default Inicio;
