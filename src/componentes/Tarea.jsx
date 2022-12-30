import React from "react"
import "../hojas-de-estilos/Tarea.css"

function Tarea({ texto, boton }) {
	return (
		<div className="contenedor-tarea">
			<div className="tarea">{texto}</div>
			<div className="boton-checklist">{boton}</div>
		</div>
	)
}

export default Tarea
