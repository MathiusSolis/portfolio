import { Content } from '../../../Content/Content';
import { LangLogo } from '../../../LangLogo/LangLogo';
import { Title } from '../../../Title/Title';
import javaIcon from '../../../../assets/images/Java.svg';
import angularIcon from '../../../../assets/images/Angular.svg';
import springIcon from '../../../../assets/images/spring.svg';
import { BaseStyle } from '../BaseStyle/BaseStyle';

export const Notions = () => {
    return (
        <BaseStyle>
            <Content id="myknowledge" asSection={true}>
                <Title title="Nociones" />
                <LangLogo src={javaIcon} alt="Java Icon" des="Java" />
                <LangLogo
                    src={springIcon}
                    alt="Spring Icon"
                    des="Spring Framework"
                />
                <LangLogo src={angularIcon} alt="Angular Icon" des="Angular" />
            </Content>
        </BaseStyle>
    );
};
