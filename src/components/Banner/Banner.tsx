import './Banner.css';
import bannerLogo from '../../assets/images/banner-logo.svg';

export const Banner = () => {
	return (
		<div className='banner'>
			<div className='bg'>
				<div className='bg__child child-1'></div>
				<div className='bg__child child-2'></div>
				<div className='bg__child child-3'>
					<h1 className='bg__title'>¡Hola!, ¡Soy Mathius!</h1>
					<h2 className='bg__sub-title'>Soy Desarrollador WEB</h2>
				</div>
			</div>
			<img className='banner-img' src={bannerLogo} alt='Banner Logo' />
		</div>
	);
};
