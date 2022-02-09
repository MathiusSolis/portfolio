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
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
					sunt rem maiores error, repellat consequuntur nostrum sint ex
					ipsam accusamus, recusandae alias corrupti saepe numquam
					cupiditate. Consectetur voluptatibus dolore illum.
				</p>
			</Content>
		</section>
	);
};
