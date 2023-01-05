import React from "react"
import "../hojas-de-estilos/Tarea.css"

function Tarea({ id, texto }) {
	let clase = "tareaPendiente"
	function Chekear() {
		clase = "tareaOk"
		return clase
	}
	return (
		<div className="contenedor-tarea">
			<div className="tareaPendiente">{texto}</div>
			<div className="boton-checklist" onClick={() => Chekear()}>
				✔
			</div>
		</div>
	)
}

export default Tarea
