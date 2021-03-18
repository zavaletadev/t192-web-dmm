import React from 'react';

const AdminMenu = (props) => {
	return (
		<nav
			className='sidebar sidebar-offcanvas'
			id='sidebar'
		>
			<ul className='nav'>
				<li className='nav-item nav-profile'>
					<a href='#' className='nav-link'>
						<div className='profile-image'>
							<img
								className='img-xs rounded-circle'
								src='../../assets/images/faces/zavaleta.jpg'
								alt='profile image'
							/>
							<div className='dot-indicator bg-success'></div>
						</div>
						<div className='text-wrapper'>
							<p className='profile-name'>
								Raúl Zavaleta
							</p>
							<p className='designation'>
								Admin
							</p>
						</div>
					</a>
				</li>
				<li className='nav-item nav-category'>
					Menú principal
				</li>
				<li className='nav-item'>
					<a
						className='nav-link'
						href='../../index.html'
					>
						<i className='menu-icon typcn typcn-document-text'></i>
						<span className='menu-title'>
							Inicio
						</span>
					</a>
				</li>
				<li className='nav-item'>
					<a
						className='nav-link'
						href='../../pages/forms/basic_elements.html'
					>
						<i className='menu-icon typcn typcn-shopping-bag'></i>
						<span className='menu-title'>
							Mi perfíl
						</span>
					</a>
				</li>
				<li className='nav-item'>
					<a
						className='nav-link'
						href='../../pages/forms/basic_elements.html'
					>
						<i className='menu-icon typcn typcn-shopping-bag'></i>
						<span className='menu-title'>
							Usuarios
						</span>
					</a>
				</li>
				<li className='nav-item'>
					<a
						className='nav-link'
						data-toggle='collapse'
						href='#ui-basic'
						aria-expanded='false'
						aria-controls='ui-basic'
					>
						<i className='menu-icon typcn typcn-coffee'></i>
						<span className='menu-title'>
							Películas
						</span>
						<i className='menu-arrow'></i>
					</a>
					<div className='collapse' id='ui-basic'>
						<ul className='nav flex-column sub-menu'>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='../../pages/ui-features/buttons.html'
								>
									+ Nueva
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='../../pages/samples/login.html'
								>
									{' '}
									Catálogo{' '}
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li className='nav-item'>
					<a
						className='nav-link'
						data-toggle='collapse'
						href='#auth'
						aria-expanded='false'
						aria-controls='auth'
					>
						<i className='menu-icon typcn typcn-document-add'></i>
						<span className='menu-title'>
							Rentas
						</span>
						<i className='menu-arrow'></i>
					</a>
					<div className='collapse' id='auth'>
						<ul className='nav flex-column sub-menu'>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='../../pages/samples/login.html'
								>
									{' '}
									Todas{' '}
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='../../pages/samples/blank-page.html'
								>
									{' '}
									Activas{' '}
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='../../pages/samples/register.html'
								>
									{' '}
									Terminadas{' '}
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='../../pages/samples/error-404.html'
								>
									{' '}
									Vencidas{' '}
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li className='nav-item'>
					<a
						className='nav-link'
						href='../../pages/forms/basic_elements.html'
					>
						<i className='menu-icon typcn typcn-shopping-bag'></i>
						<span className='menu-title'>
							Cerrar sesión
						</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default AdminMenu;
