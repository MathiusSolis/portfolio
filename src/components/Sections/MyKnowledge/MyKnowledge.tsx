import './MyKnowledge.css';
import htmlIcon from '../../../assets/images/html.svg';
import cssIcon from '../../../assets/images/css.svg';
import javascriptIcon from '../../../assets/images/javascript.svg';
import typescriptIcon from '../../../assets/images/typescript.svg';
import reactIcon from '../../../assets/images/react.svg';
import nodeIcon from '../../../assets/images/node.svg';
import expressIcon from '../../../assets/images/express.svg';
import gitIcon from '../../../assets/images/git.svg';
import sqlIcon from '../../../assets/images/mysql-mariadb.svg';
import { Title } from '../../Title/Title';
import { LangLogo } from '../../LangLogo/LangLogo';
import { Content } from '../../Content/Content';

export const MyKnowledge = () => {
	return (
		<Content id='myknowledge' asSection={true}>
			<Title
				title='Mis Conocimientos'
				subTitle='Fundamentos/Bases en los siguientes lenguajes y frameworks'
			/>
			<LangLogo src={htmlIcon} alt='HTML Icon' des='HTML' />
			<LangLogo src={cssIcon} alt='CSS Icon' des='CSS' />
			<LangLogo src={javascriptIcon} alt='JavaScript Icon' des='JavaScript' />
			<LangLogo src={typescriptIcon} alt='TypeScript Icon' des='TypeScript' />
			<LangLogo src={reactIcon} alt='React Icon' des='React' />
			<LangLogo src={nodeIcon} alt='Node Icon' des='Node.JS' />
			<LangLogo src={gitIcon} alt='Git Icon' des='Git' />
			<LangLogo src={expressIcon} alt='Express Icon' des='Express Framework' />
			<LangLogo src={sqlIcon} alt='MySQL and MariaDB Icon' des='MariaDB - MySQL' />
		</Content>
	);
};
