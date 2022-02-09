import { Title } from '../../Title/Title';
import BVLogo from '../../../assets/images/bv-logo.png';
import ToolsIcon from '../../../assets/images/tools-icon.svg';
import { Content } from '../../Content/Content';
import { Article } from '../../Article/Article';
import './MyProyects.css';

export const MyProyects = () => {
	return (
		<section>
			<Title title='Mis Proyectos' />
			<Content style={{ marginTop: '15rem', paddingBottom: '2rem', rowGap:  '5em'}} bg={true}>
				<div className='img-container'>
					<img className='img-container__img' src={ToolsIcon} alt='Icon 2' />
				</div>
				<Article logo={BVLogo} des='Creador de la pagina de una empresa consultora' link='https://www.buenvivirtec.com' />
				<Article logo={BVLogo} des='Creador de la pagina de una empresa consultora' link='https://www.buenvivirtec.com' />
				<Article logo={BVLogo} des='Creador de la pagina de una empresa consultora' link='https://www.buenvivirtec.com' />
			</Content>
		</section>
	);
};
