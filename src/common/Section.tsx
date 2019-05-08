import React, { ReactNode } from 'react';
import {
	IonGrid,
	IonRow,
	IonCol
} from '@ionic/react';
import { LargeSectionTextTitle } from './LargeSection';
import styled from 'styled-components';


// =============================================================================
export const SectionText = styled.div`
	color: var(--ion-color-dark-tint);
	font-size: 18px;
`;


// =============================================================================
type SectionProps = {
	background?: string;
	title: string;
	children: ReactNode;
};

const Section: React.FC<SectionProps> = (props: SectionProps) => {
	return (
		<div style={{
			display: 'flex',
			alignItems: 'center',
			padding: '50px 0 50px',
			background: props.background
		}}
		>
			<IonGrid fixed style={{
				maxWidth: '960px'
			}}>
				<IonRow>
					<IonCol class="ion-text-center ion-margin">
						<LargeSectionTextTitle>{props.title}</LargeSectionTextTitle>
					</IonCol>
				</IonRow>
				{props.children}
			</IonGrid>
		</div>
	)
}

export default Section;
