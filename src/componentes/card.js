import React from "react"

function Card() {
	return (
		// <div className="contenedor">
		// 	<a href="http://localhost:3000/" className="enlace">
		// 		<img
		// 			className="cardImagen"
		// 			src={require("../img/uc.png")}
		// 			alt="Simbolo"
		// 		/>
		// 	</a>
		// 	<h2 className="cardTitulo">Uroclinica de Córdoba</h2>
		// 	<a href="http://localhost:3000/" className="enlace">
		// 		<p className="CadTexto">IPS</p>
		// 	</a>
		// </div>
		<div className="card" style="width: 18rem;">
			<img src="" className="card-img-top" alt="algo"></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	)
}
export default Card
