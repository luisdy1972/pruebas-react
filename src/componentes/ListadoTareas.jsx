import React from "react"
import "../hojas-de-estilos/ListadoTareas.css"

function ListadoTareas({ children }) {
	return <div className="feedTareas">{children}</div>
}

export default ListadoTareas
