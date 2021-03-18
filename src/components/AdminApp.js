import React, { useEffect } from 'react';

/**
 * Creamos un Enrutador para las url's de la sección
 * de administración del panel web
 */
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useRouteMatch,
} from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminMenu from './AdminMenu';

/*
Indicamos las rutas que se ejecutarán dentro  de
/admin
*/

const AdminApp = (props) => {
	/*
    useRouteMatch nos comparte la url del componente 
    pare de dond enos encontramos
    */
	const adminBaseUrl = useRouteMatch();

	/**
	 * Efecto para quitar la imagen de fondo
	 */
	useEffect(() => {
		/**
		 * Accedemos al contenido deL index.html
		 * y lo modificamos
		 */
		document.body.style = 'background: none';
	}, []);
	return (
		<div className='container-scroller'>
			<AdminHeader />

			<div className='container-fluid page-body-wrapper'>
				<AdminMenu />

				<div className='main-panel'>
					<div className='content-wrapper'>
						<Router>
							<Switch>
								<Route
									exact
									path={adminBaseUrl.url}
								>
									<h1>En admin home</h1>
								</Route>
								<Route
									exact
									path={`${adminBaseUrl.url}/perfil`}
								>
									<h1>En admin perfíl</h1>
								</Route>
							</Switch>
						</Router>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminApp;
