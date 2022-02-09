import './AboutMe.css';
import searchIcon from '../../../assets/images/search.svg';
import pencilIcon from '../../../assets/images/pencil.svg';
import clockIcon from '../../../assets/images/clock.svg';
import { Title } from '../../Title/Title';
import { Content } from '../../Content/Content';

export const AboutMe = () => {
	return (
		<section>
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
					Soy programador junior, titulado en la carrera Analista Programador, apasionado a la programación, principalmente relacionado al desarrollo de aplicaciones u paginas WEB, autodidacta y con dedicación a produndizar o mejorar lo que he aprendo, mi principal stack es JavaScript y su ecosistema.
				</p>
			</Content>
		</section>
	);
};
