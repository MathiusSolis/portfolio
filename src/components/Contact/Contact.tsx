import { Content } from '../Content/Content';
import phone from '../../assets/images/phone.svg';
import email from '../../assets/images/email.svg';
import phoneNumber from '../../assets/images/phone-number.png';
import emailCotact from '../../assets/images/email.png';
import githubIcon from '../../assets/icons/programing-icons/github.svg';
import { Title } from '../Title/Title';
import './Contact.css';

export const Contact = () => {
	return (
		<section id='contact'>
			<Title title='Mi Contacto/Información' />
			<div className='contact-box'>
				<div className='contact'>
					<img className='link__img' src={phone} alt='Mi número de telefono' />
					<a className='link' href={phoneNumber} download>Teléfono</a>
				</div>
				<div className='contact'>
					<img className='link__img' src={email} alt='Mi Email/Correo' />
					<a className='link' href={emailCotact} download>Email/Correo</a>
				</div>
				<div className='contact'>
					<img className='link__img' src={githubIcon} alt='Mi Email/Correo' />
					<a className='link' href="https://github.com/MathiusSolis" target="_blank">GitHub</a>
				</div>
			</div>
		</section>
	);
};
