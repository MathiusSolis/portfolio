import './Article.css';

export const Article = ({
	logo,
	des,
	link,
	repository
}: {
	logo: string;
	des: string;
	link: string;
	repository?: string;
}) => {
	return (
		<article className='article'>
			<header className='article__header'>
				<img className='article__img' src={logo} alt='Logo de Buen Vivir' />
			</header>
			<section className='article__section'>
				<h2 className='article__title'>Página Oficial de Buen Vivir Tecnologia</h2>
				<hr className='article__hr article--margin-top' />
				<p className='article__description'>{des}</p>
				<hr className='article__hr article--margin-bottom' />
			</section>
			<footer className='article__footer'>
				<a href={link} target='blank'>
					Ir al sitio
				</a>
				{repository && (
					<a href={repository} target='blank'>
						Ir al sitio
					</a>
				)}
			</footer>
		</article>
	);
};
