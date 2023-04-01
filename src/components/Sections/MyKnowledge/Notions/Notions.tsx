import { Content } from '../../../Content/Content';
import { LangLogo } from '../../../LangLogo/LangLogo';
import { Title } from '../../../Title/Title';
import javaIcon from '../../../../assets/images/Java.svg';
import springIcon from '../../../../assets/images/spring.svg';
import dartIcon from '../../../../assets/images/dart.svg';
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
                <LangLogo
                    src={dartIcon}
                    alt="Dart Icon"
                    des="Dart"
                />
            </Content>
        </BaseStyle>
    );
};
