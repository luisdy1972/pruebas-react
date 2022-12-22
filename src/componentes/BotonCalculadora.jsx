import React from "react"
import "../hojas-de-estilos/BotonCalculadora.css"
function BotonCalculadora(props) {
	let clases = ["boton-calculadora", "boton-operador"]
	let propiedad = props.children.toString()
	let claseDelBoton

	if (propiedad == "+" || propiedad == "-" || propiedad == "*") {
		claseDelBoton = clases[1]
	} else claseDelBoton = clases[0]

	return <button className={`${claseDelBoton}`}>{props.children}</button>
}

export default BotonCalculadora
