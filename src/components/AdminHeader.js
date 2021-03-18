import React from 'react';

const AdminHeader = (props) => {
	return (
		<nav className='navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row'>
			<div className='text-center navbar-brand-wrapper d-flex align-items-top justify-content-center'>
				<a
					className='navbar-brand brand-logo'
					href='../../index.html'
				>
					<img
						src='/images/adminlogo.png'
						alt='logo'
						style={{ height: '50px' }}
					/>{' '}
				</a>
				<a
					className='navbar-brand brand-logo-mini'
					href='../../index.html'
				>
					<img
						src='/images/logo-mini.png'
						alt='logo'
					/>{' '}
				</a>
			</div>
			<div className='navbar-menu-wrapper d-flex align-items-center'>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item dropdown'>
						<a
							className='nav-link count-indicator'
							id='messageDropdown'
							href='#'
							data-toggle='dropdown'
							aria-expanded='false'
						>
							<i className='mdi mdi-bell-outline'></i>
							<span className='count'>7</span>
						</a>
					</li>

					<li className='nav-item dropdown d-none d-xl-inline-block user-dropdown'>
						<a
							className='nav-link dropdown-toggle'
							id='UserDropdown'
							href='#'
							data-toggle='dropdown'
							aria-expanded='false'
						>
							<img
								className='img-xs rounded-circle'
								src='../../assets/images/faces/zavaleta.jpg'
								alt='Profile image'
							/>{' '}
						</a>
						<div
							className='dropdown-menu dropdown-menu-right navbar-dropdown'
							aria-labelledby='UserDropdown'
						>
							<div className='dropdown-header text-center'>
								<img
									className='img-md rounded-circle'
									src='../../assets/images/faces/zavaleta.jpg'
									alt='Profile image'
								/>
								<p className='mb-1 mt-3 font-weight-semibold'>
									Raúl Zavaleta
								</p>
								<p className='font-weight-light text-muted mb-0'>
									raul.zavaletazea@uteq.edu.mx
								</p>
							</div>
							<a className='dropdown-item'>
								Mi perfíl
								<i className='dropdown-item-icon ti-dashboard'></i>
							</a>
							<a className='dropdown-item'>
								Cerrar Sesión
								<i className='dropdown-item-icon ti-power-off'></i>
							</a>
						</div>
					</li>
				</ul>
				<button
					className='navbar-toggler navbar-toggler-right d-lg-none align-self-center'
					type='button'
					data-toggle='offcanvas'
				>
					<span className='mdi mdi-menu'></span>
				</button>
			</div>
		</nav>
	);
};

export default AdminHeader;
