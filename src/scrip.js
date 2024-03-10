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
	afiliarse_club(club) {
		this.clubs.push(club);
	}
	salirse_club(club) {
		this.clubs.slice(this.clubs.indexOf(club), 1);
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
function Cargar_datos() {}
function Registrar_usuario() {
	nombre = document.getElementById('nombre').value;
	apellido = document.getElementById('apellido').value;
	usuario = document.getElementById('usuario').value;
	email = document.getElementById('email').value;
	password = document.getElementById('password').value;
	jeugo = document.getElementById('juego').value;
	if (nombre && apellido && usuario && email && password && juego) {
		Perfil(nombre, apellido, usuario, email, password, juego);
	} else {
		alert('Por favor, completa todos los campos');
		return;
	}
}
