import '../styles/normalize.css';
import '../styles/mediaquery.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from '../../pages';

const App = () => {
	return (
		<BrowserRouter>
			<Index />
		</BrowserRouter>
	);
};

export default App;
