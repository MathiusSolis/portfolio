import htmlIcon from '../../../../assets/images/html.svg';
import cssIcon from '../../../../assets/images/css.svg';
import javascriptIcon from '../../../../assets/images/javascript.svg';
import typescriptIcon from '../../../../assets/images/typescript.svg';
import reactIcon from '../../../../assets/images/react.svg';
import nodeIcon from '../../../../assets/images/node.svg';
import expressIcon from '../../../../assets/images/express.svg';
import gitIcon from '../../../../assets/images/git.svg';
import mysqlIcon from '../../../../assets/images/mysql.svg';
import mariadbIcon from '../../../../assets/images/mariadb.svg';
import reduxIcon from '../../../../assets/images/redux.svg';
import phpIcon from '../../../../assets/images/php.svg';
import javaIcon from '../../../../assets/images/java.svg';
import springIcon from '../../../../assets/images/spring.svg';
import dartIcon from '../../../../assets/images/dart.svg';
import flutterIcon from '../../../../assets/images/flutter.svg';
import webpayIcon from '../../../../assets/images/webpay.svg';

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
				<LangLogo src={nodeIcon} alt='Node Icon' des='Node.JS' />
				<LangLogo src={expressIcon} alt='Express Icon' des='Express Framework' />
				<LangLogo src={phpIcon} alt='PHP Icon' des='PHP' />
				<LangLogo
					src={springIcon}
					alt="Spring Icon"
					des="Spring Framework"
				/>
				<LangLogo
					src={dartIcon}
					alt="Dart Icon"
					des="Dart"
				/>
				<LangLogo
					src={flutterIcon}
					alt="Flutter Icon"
					des="Flutter"
				/>
				<LangLogo src={gitIcon} alt='Git Icon' des='Git' />
				<LangLogo src={mysqlIcon} alt='MySQL Icon' des='MySQL' />
				<LangLogo src={mariadbIcon} alt='MariaDB Icon' des='MariaDB' />
				<LangLogo src={javaIcon} alt="Java Icon" des="Java" />
				<LangLogo src={webpayIcon} alt="WebPay Icon" des="WebPay" />
			</Content>
		</BaseStyle>
	);
};
