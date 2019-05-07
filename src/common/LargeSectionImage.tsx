import React, { CSSProperties } from 'react';
import { TextAlignProperty } from 'csstype';

type LargeSectionImageProps = {
	align: TextAlignProperty;
};

const LargeSectionImage: React.FC<LargeSectionImageProps> = (props: LargeSectionImageProps) => {
	return (
		<div style={{textAlign: props.align}}>
			<img src="https://via.placeholder.com/400/09f/fff.png" />
		</div>
	);
}

export default LargeSectionImage;
