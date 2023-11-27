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
			<div className="divisor">
				<div className="divisor__circle"></div>
				<hr className="divisor__line" />
				<div className="divisor__circle"></div>
			</div>
			<h2 className='title'>{title}</h2>
			<div className="half-divisor">
				<div className="divisor__circle"></div>
				<hr className="divisor__line" />
				<div className="divisor__circle"></div>
			</div>
			{subTitle && <h3 className='title-sub-title'>{subTitle}</h3>}
		</>
	);
};
