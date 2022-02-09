import { Banner } from '../Banner/Banner';
import { NavBar } from '../NavBar/NavBar';
import './Header.css';

export const Header = () => {
	return <header className='header'>
        <NavBar />
        <Banner />
    </header>;
};
