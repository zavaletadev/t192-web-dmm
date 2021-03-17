import React from 'react';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registro';

/**
 *
 * El esquema de navegación de ReactJS indica crear un router (Arbol de componentes
 * con las direcciones de cada url que necesitemos)
 */
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

function App() {
	/**
	 * Generamos un contenedor de navegación  llamado Router, e indicamos
	 * el contenido que tendrá cada ruta
	 */
	return (
		<Router>
			{/**
			 * Indicamos las rutas de la web con sus respectivos
			 * componentes
			 */}
			<Switch>
				<Route exact path='/'>
					<Inicio />
				</Route>

				<Route path='/login'>
					<Login />
				</Route>

				<Route path='/registro'>
					<Registro />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
