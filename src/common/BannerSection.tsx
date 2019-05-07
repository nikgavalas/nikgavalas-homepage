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
	return (
		<div style={{
			fontFamily: 'Eina,"Helvetica Neue",Helvetica,sans-serif'
		}}>
			<IonGrid style={{ padding: '0' }}>
				<IonRow style={{ padding: '0' }}>
					<IonCol sizeSm="12" sizeMd="8" style={{ padding: '0' }}>
						<img src={props.imgPath} alt="banner" />
					</IonCol>
					<IonCol sizeSm="12" sizeMd="4" style={{ padding: '0' }}>
						<div style={{
							background: 'var(--ion-color-primary-tint)',
							textAlign: 'center',
							paddingTop: '120px',
							height: '100%'
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
