export const LangLogo = ({
	src,
	alt,
	des
}: {
	src: string;
	alt: string;
	des: string;
}) => {
	return (
		<figure>
			<img className='MyKnowledge__language-icon' src={src} alt={alt} />
			<figcaption>{des}</figcaption>
		</figure>
	);
};
