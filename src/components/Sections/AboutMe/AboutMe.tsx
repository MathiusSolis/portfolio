import './AboutMe.css';
import searchIcon from '../../../assets/icons/general-icons/search.svg';
import pencilIcon from '../../../assets/icons/general-icons/pencil.svg';
import clockIcon from '../../../assets/icons/general-icons/clock.svg';
import { Title } from '../../Title/Title';
import { Content } from '../../Content/Content';

export const AboutMe = () => {
	return (
		<section id='aboutme'>
			<Title title='Sobre Mí' />
			<Content bg={true}>
				<img
					className='section__search-icon'
					src={searchIcon}
					alt='Search Icon'
				/>
				<img
					className='section__pencil-icon'
					src={pencilIcon}
					alt='Pencil Icon'
				/>
				<img
					className='section__clock-icon'
					src={clockIcon}
					alt='Clock Icon'
				/>
				<p className='info'>
					Soy programador/desarrollador, titulado en la carrera de Analista Programador, apasionado a la programación, principalmente relacionado con el desarrollo de aplicaciones u páginas web, autodidacta y con dedicación a profundizar o mejorar lo que he aprendido. Mi principal stack es JavaScript y su ecosistema.
				</p>
			</Content>
		</section>
	);
};
