import { Title } from '../../Title/Title';
import BVLogo from '../../../assets/images/bv-logo.png';
import ToolsIcon from '../../../assets/images/tools-icon.svg';
import { Content } from '../../Content/Content';
import { Article } from '../../Article/Article';
import './MyProyects.css';

export const MyProyects = () => {
	return (
		<section id='myproyects'>
			<Title title='Mis Proyectos' />
			<Content style={{ marginTop: '15rem', paddingBottom: '2rem', rowGap:  '5em'}} bg={true}>
				<div className='img-container'>
					<img className='img-container__img' src={ToolsIcon} alt='Icon 2' />
				</div>
				<Article 
					logo={BVLogo}
					title='Página Oficial de Buen Vivir Tecnología' 
					des='Creador de la página WEB oficial de la empresa Buen Vivir, dedicada a la consultoría y venta de paneles solares' 
					link='https://www.buenvivirtec.com' />
			</Content>
		</section>
	);
};
