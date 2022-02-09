import { Content } from '../Content/Content';
import phone from '../../assets/images/phone.svg';
import email from '../../assets/images/email.svg';
import { Title } from '../Title/Title';
import './Contact.css';

export const Contact = () => {
	return (
		<Content asSection={true}>
			<Title title='Contactame' subTitle='Puedes contactarme mediante:' />
			<div className='contact'>
				<img className='link__img' src={phone} alt='Mi número de telefono' />
				<a className='link' href='./src/assets/images/phone-number.png' download>Teléfono</a>
			</div>
			<div className='contact'>
				<img className='link__img' src={email} alt='Mi Email/Correo' />
				<a className='link' href='./src/assets/images/email.png' download>Email/Correo</a>
			</div>
		</Content>
	);
};
