import './App.css';
import Testimonio from './components/Testimonios';
import CardTest from './components/CardTest';
import Datos from './Json/testimonio.json';
import {useState} from 'react';

function App() {

	const [data, setData] = useState(Datos);
	
	return (
		<div className="App">
			<div className="contenedor-principal">
				<h1>Here is what our alumni say about freeCodeCamp:</h1>
					{data.map(({imagen, nombre, from, cargo, empresa, texto}) => (
						
						<Testimonio 
							key={nombre}
							imagen={imagen}
							nombre={nombre}
							from={from}
							cargo={cargo}
							empresa={empresa}
							texto={texto}
						/>

						

					))}
			</div>
			<CardTest />
		</div>
	);
}

export default App;

