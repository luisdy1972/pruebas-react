import React from "react"
import "../hojas-de-estilos/FormTareas.css"

function FormTareas() {
	return (
		<div>
			<h2 className="card-title">Tareas</h2>
			<form className="contenedorForm" action="">
				<input
					className="agregarTarea"
					type="text"
					placeholder="Tarea a Registrar"
				/>
				<input className="botonAgregarTareas" type="button" value="+" />
			</form>
			<div className="feedTareas"></div>
		</div>
	)
}

export default FormTareas
