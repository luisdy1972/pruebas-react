import React from "react"
import Tarea from "./Tarea"
import "../hojas-de-estilos/FormTareas.css"

function FormTareas() {
	return (
		<div className="contenedor-formulario">
			<h2 className="card-title">Tareas</h2>
			<form className="contenedorForm" action="">
				<input
					className="agregarTarea"
					type="text"
					placeholder="Tarea a Registrar"
				/>
				<input className="botonAgregarTareas" type="button" value="+" />
			</form>
			<div className="feedTareas">
				<Tarea texto="Tarea numero 1" boton="✔" />
				<Tarea texto="Tarea numero 2" boton="✔" />
			</div>
		</div>
	)
}

export default FormTareas
