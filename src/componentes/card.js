import React from "react"
import "../hojas-de-estilos/Card.css"
function Card(props) {
	return (
		<div className="card-body">
			<img
				src={require("../img/uc.png")}
				className="imagen-card"
				alt="Logo de la empresa"
			></img>
			<h5 className="card-title">{props.nombre}</h5>
			<h6 className="card-cargo">{props.cargo}</h6>
			<p className="card-text">{props.presentacion}</p>
			<a href={props.link} className="enlace-website">
				Website
			</a>
		</div>
	)
}
export default Card
