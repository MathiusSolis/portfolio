import htmlIcon from '../../../../assets/icons/programing-icons/html.svg';
import cssIcon from '../../../../assets/icons/programing-icons/css.svg';
import javascriptIcon from '../../../../assets/icons/programing-icons/javascript.svg';
import typescriptIcon from '../../../../assets/icons/programing-icons/typescript.svg';
import reactIcon from '../../../../assets/icons/programing-icons/react.svg';
import nodeIcon from '../../../../assets/icons/programing-icons/node.svg';
import expressIcon from '../../../../assets/icons/programing-icons/express.svg';
import gitIcon from '../../../../assets/icons/programing-icons/git.svg';
import gitHubActionsIcon from '../../../../assets/icons/programing-icons/gituhub-actions.svg';
import mysqlIcon from '../../../../assets/icons/programing-icons/mysql.svg';
import mariadbIcon from '../../../../assets/icons/programing-icons/mariadb.svg';
import reduxIcon from '../../../../assets/icons/programing-icons/redux.svg';
import javaIcon from '../../../../assets/icons/programing-icons/java.svg';
import springIcon from '../../../../assets/icons/programing-icons/spring.svg';
import webpayIcon from '../../../../assets/icons/programing-icons/webpay.svg';
import nest from '../../../../assets/icons/programing-icons/nestjs.svg';
import next from '../../../../assets/icons/programing-icons/nextjs.svg';

import { Title } from '../../../Title/Title';
import { LangLogo } from '../../../LangLogo/LangLogo';
import { Content } from '../../../Content/Content';
import { BaseStyle } from '../BaseStyle/BaseStyle';

export const MyKnowledge = () => {
	return (
		<BaseStyle>
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
				<LangLogo src={reduxIcon} alt='Redux Icon' des='Redux' />
				<LangLogo src={nodeIcon} alt='Node Icon' des='Node.js Runtime' />
				<LangLogo src={expressIcon} alt='Express Icon' des='Express' />
				<LangLogo src={nest} alt='Nest.js Icon' des='NestJS' />
				<LangLogo src={next} alt='Nest.js Icon' des='Next.js' />
				<LangLogo src={gitIcon} alt='Git Icon' des='Git' />
				<LangLogo src={gitHubActionsIcon} alt='GitHub Action Icon' des='GitHub Actions' />
				<LangLogo src={mysqlIcon} alt='MySQL Icon' des='MySQL' />
				<LangLogo src={mariadbIcon} alt='MariaDB Icon' des='MariaDB' />
				<LangLogo src={javaIcon} alt="Java Icon" des="Java" />
				<LangLogo src={springIcon} alt="Spring Icon" des="Spring"/>
				<LangLogo src={webpayIcon} alt="WebPay Icon" des="WebPay" />
			</Content>
		</BaseStyle>
	);
};
