import './NavBar.css';

export const NavBar = () => {
	return (
		<nav className='navbar'>
			<ul className='list'>
				<li className='list__item'>
					<a href='#aboutme' className='list__link'>Sobre Mi</a>
				</li>
				<li className='list__item'>
					<a href='#myknowledge' className='list__link'>Mis Conocimientos</a>
				</li>
				<li className='list__item'>
					<a href='#myproyects' className='list__link'>Mis Proyectos</a>
				</li>
				<li className='list__item'>
					<a href='#' className='list__link'>Mi Curriculum</a>
				</li>
				<li className='list__item'>
					<a href='#contact' className='list__link'>Contactame</a>
				</li>
			</ul>
		</nav>
	);
};
