import "./App.css"
import Card from "./componentes/Card"
import Contador from "./componentes/Contador"
import Navbar from "./componentes/Navbar"

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="Feed">
				<Card
					nombre="Luis Ayala"
					cargo="Auxiliar de sistema"
					presentacion='"Los técnicos laboral como Auxiliares de Sistemas Informáticos operan equipos de cómputo, monitorean la operación de sistemas de computación y redes, coordinan su uso y producen reportes de operación."'
					link="https://jw.org"
				/>
				<Contador />
			</div>
		</div>
	)
}
export default App
