class Perfil {
	constructor(nombre, apellido, usuario, email, contrasegna, videojuego) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.usuario = usuario;
		this.email = email;
		this.contrasegna = contrasegna;
		this.videojuego = videojuego;
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
	document.getElementById('id').value;
}
