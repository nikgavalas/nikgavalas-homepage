import React, { ReactNode } from 'react';

type GradientSectionProps = {
	background?: string;
	title: string;
	children: ReactNode;
};

const GradientSection: React.FC<GradientSectionProps> = (props) => {
	return (
		<div style={{
			display: 'flex',
			alignItems: 'center',
			padding: '50px 0 50px',
			background: props.background
		}}
		>
		</div>
	);
};

export default GradientSection;
