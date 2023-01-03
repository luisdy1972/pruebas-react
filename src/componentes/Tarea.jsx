import React from "react"
import "../hojas-de-estilos/Tarea.css"

function Tarea({ texto, estado }) {
	return (
		<div className="contenedor-tarea">
			<div className={estado || "tareaPendiente"}>{texto}</div>
			<div className="boton-checklist">✔</div>
		</div>
	)
}

export default Tarea
