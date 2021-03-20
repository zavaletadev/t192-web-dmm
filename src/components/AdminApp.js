import React, { useEffect } from 'react';

/**
 * Creamos un Enrutador para las url's de la sección
 * de administración del panel web
 */
import {
	Switch,
	Route,
	useRouteMatch,
} from 'react-router-dom';
import Home from '../pages/admin/Home';
import Perfil from '../pages/admin/Perfil';
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
			<AdminHeader adminBaseUrl={adminBaseUrl} />

			<div className='container-fluid page-body-wrapper'>
				<AdminMenu adminBaseUrl={adminBaseUrl} />

				<div className='main-panel'>
					<div className='content-wrapper'>
						<Switch>
							<Route
								exact
								path={adminBaseUrl.url}
							>
								<Home />
							</Route>
							<Route
								exact
								path={`${adminBaseUrl.url}/perfil`}
							>
								<Perfil />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminApp;
