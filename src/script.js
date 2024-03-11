class Perfil {
	constructor(nombre, apellido, usuario, email, contrasegna, videojuego) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.usuario = usuario;
		this.email = email;
		this.contrasegna = contrasegna;
		this.videojuego = videojuego;
		this.membresias = [];
	}
	modificar_perfil(
		nombre = this.nombre,
		apellido = this.apellido,
		videojuego = this.videojuego
	) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.videojuego = videojuego;
	}
	set_membresias(membresias) {
		this.membresias = membresias;
	}
	afiliarse_club(club) {
		this.membresias.push(club);
	}
	salirse_club(club) {
		this.membresias.slice(this.membresias.indexOf(club), 1);
	}
}
class Videojuego {
	constructor(id, titulo, genero, descripcion) {
		this.id = id;
		this.titulo = titulo;
		this.genero = genero;
		this.descripcion = descripcion;
	}
}

class Club {
	constructor(id, nombre, descripcion, videojuegos = []) {
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.videojuegos = videojuegos;
	}
}
function Cargar_datos() {
	Cargar_datos_usuarios();
	Cargar_datos_clubs();
	Cargar_datos_juegos();
}
function Cargar_datos_usuarios() {
	const usuarios = localStorage.getItem('usuarios');
	let objetos_usuarios = [];
	for (var email in usuarios) {
		var usuario = Perfil(
			usuarios[email]['nombre'],
			usuarios[email]['apellido'],
			usuarios[email]['usuario'],
			email,
			usuarios[email]['password'],
			usuarios[email]['juego']
		);
		usuario.set_membresias(usuarios[email]['membresias']);
		objetos_usuarios[email] = usuario;
	}
	localStorage.setItem('usuarios', JSON.stringify(objetos_usuarios));
}

function Cargar_datos_clubs() {
	const clubs = localStorage.getItem('clubs');
	let objetos_clubs = {};
	for (var id in clubs) {
		var club = Club(
			id,
			clubs[id]['titulo'],
			clubs[id]['genero'],
			clubs[id]['descripcion']
		);
		objetos_clubs[id] = club;
	}
	localStorage.setItem('clubs', JSON.stringify(objetos_clubs));
}
function Cargar_datos_juegos() {
	const juegos = localStorage.getItem('juegos');
	let objetos_juegos = {};
	for (var id in juegos) {
		var juego = Videojuego(
			id,
			juegos[id]['nombre'],
			juegos[id]['descripcion'],
			juegos[id]['jeugos']
		);
		objetos_juegos[id] = juego;
	}
	localStorage.setItem('juegos', JSON.stringify(objetos_juegos));
}

function Registrar_usuario() {
	let nombre = document.getElementById('nombre').value;
	let apellido = document.getElementById('apellido').value;
	let usuario = document.getElementById('usuario').value;
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let juego = document.getElementById('juego').value;
	if (nombre && apellido && usuario && email && password && juego) {
		const usuarios = JSON.parse(localStorage.getItem('usuarios'));
		if (email in usuarios || usuario in usuarios) {
			alert('Este correo y/o usuario ya fueron registrados');
			return;
		}
		Perfil(nombre, apellido, usuario, email, password, juego);
		window.location.href = 'Inicio.html';
	} else {
		alert('Por favor, completa todos los campos');
		return;
	}
}
