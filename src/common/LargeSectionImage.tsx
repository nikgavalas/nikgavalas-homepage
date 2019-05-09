import React from 'react';


// =============================================================================
type LargeSectionImageProps = {
	imgSource: string;
};

const LargeSectionImage: React.FC<LargeSectionImageProps> = (props: LargeSectionImageProps) => {
	return (
		<div style={{textAlign: 'center'}}>
			<img src={props.imgSource} alt="section" style={{ borderRadius: '10%' }}/>
		</div>
	);
}

export default LargeSectionImage;
