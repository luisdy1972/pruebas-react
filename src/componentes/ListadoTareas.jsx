import React from "react"
import InputAgregarTarea from "./InputAgregarTarea"
import "../hojas-de-estilos/ListadoTareas.css"
import Tarea from "./Tarea"
// import { useState } from "react"

function ListadoTareas() {
	// const [listaTareas, setListaTareas] = useState(" ")

	return (
		<div className="contenedor-formulario">
			<h2 className="card-title">Tareas</h2>
			<InputAgregarTarea />
			<div className="feedTareas">
				<Tarea texto={"Hola"} estado={"tareaOk"} />
			</div>
		</div>
	)
}

export default ListadoTareas
