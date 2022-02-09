import './Article.css';

export const Article = ({
	title,
	logo,
	des,
	link,
	repository
}: {
	title: string;
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
				<h2 className='article__title'>{title}</h2>
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
