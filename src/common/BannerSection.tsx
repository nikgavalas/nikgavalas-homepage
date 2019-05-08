import React, { ReactNode } from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import styled from 'styled-components';


// =============================================================================
export const BannerSectionTitle = styled.h1`
	font-size: 47px;
	font-weight: 700;
	color: #fff;
`;


// =============================================================================
export const BannerSectionSubtitle = styled.h2`
	font-size: 22px;
	color: #fff;
`;


// ============================================================================
type BannerSectionProps = {
	imgPath: string;
	children: ReactNode;
};

const BannerSection: React.FC<BannerSectionProps> = (props: BannerSectionProps) => {
	const BANNER_HEIGHT = '500px';

	return (
		<div>
			<IonGrid style={{ padding: '0' }}>
				<IonRow style={{ padding: '0' }}>
					<IonCol size="12" sizeMd="7" style={{ padding: '0' }}>
						<div style={{
							background: `url(${props.imgPath}) center no-repeat`,
							height: BANNER_HEIGHT
						}}
						></div>
					</IonCol>
					<IonCol size="12" sizeMd="5" style={{ padding: '0' }}>
						<div style={{
							background: 'var(--ion-color-primary-tint)',
							textAlign: 'center',
							paddingTop: '120px',
							height: BANNER_HEIGHT
						}}>
							{props.children}
						</div>
					</IonCol>
				</IonRow>
			</IonGrid>
		</div>
	)
}

export default BannerSection;
