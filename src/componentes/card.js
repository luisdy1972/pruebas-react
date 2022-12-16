import { React } from "react"

function card() {
	return (
		<div className="contenedor">
			<img
				className="img-card"
				src={require("..img/Simbolo-Positivo.png")}
			></img>
			<h2 className="cardTitulo"></h2>
			<p className="CadTexto"></p>
		</div>
	)
}

export default card
