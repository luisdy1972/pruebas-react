import React from "react"
import "../hojas-de-estilos/Card.css"
function Card() {
	return (
		// <div className="contenedor">
		// 	<a href="http://localhost:3000/" className="enlace">
		// 		<img
		// 			className="cardImagen"
		// 			src={require("../img/uc.png")}
		// 			alt="Simbolo"
		// 		/>
		// 	</a>
		// 	<h2 className="cardTitulo">Uroclinica de Córdoba</h2>
		// 	<a href="http://localhost:3000/" className="enlace">
		// 		<p className="CadTexto">IPS</p>
		// 	</a>
		// </div>

		<div className="card-body">
			<img
				src={require("../img/uc.png")}
				className="imagen-card"
				alt="Logo de la empresa"
			></img>
			<h5 className="card-title">Uroclinica de cordoba</h5>
			<p className="card-text">
				Uroclinica de Córdoba es una clínica prestadora de servicios
				médicos especializados en Urología, contamos con un excelente
				equipo medico de gran experiencia en la resolución de patologías
				urológicas, gracias a la aplicación de medicina de alta
				complejidad soportada con tecnología de punta.
			</p>
			<a href="http://localhost:3000" className="enlace-website">
				Website
			</a>
		</div>
	)
}
export default Card
