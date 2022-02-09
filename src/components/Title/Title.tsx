import './Title.css';

export const Title = ({
	title,
	subTitle
}: {
	title: string;
	subTitle?: string;
}) => {
	return (
		<>
			<h2 className='title'>
				<span className='title-underline'>{title}</span>
			</h2>
			{subTitle && <h3 className='title-sub-title'>{subTitle}</h3>}
		</>
	);
};
