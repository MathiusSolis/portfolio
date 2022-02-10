import './Content.css';

export const Content = ({
	id,
	asSection = false,
	bg = false,
	style,
	children,
}: {
	id?: string;
	style?: {
		marginTop?: string | number;
		paddingBottom?: string | number;
		rowGap?: string;
	};
	asSection?: boolean;
	bg?: boolean;
	children?: any;
}) => {
	if (asSection)
		return (
			<section id={ id } className={`content ${bg && 'content-bg'}`}>
				{children}
			</section>
		);
	else
		return (
			<div className={`content ${bg && 'content-bg'}`} style={style || {}}>
				{children}
			</div>
		);
};
