import React from 'react';
import styled from 'styled-components';
import { History } from 'history';
import {
	IonGrid,
	IonRow,
	IonCol,
	IonButton
} from '@ionic/react';


// =============================================================================
export const LargeSectionText = styled.div`
	text-align: center;
`;


// =============================================================================
export const LargeSectionTextTitle = styled.h2`
	font-size: 47px;
	font-weight: 700;
	margin-bottom: 15px;
	letter-spacing: -.02em;
`;


// =============================================================================
export const LargeSectionTextBody = styled.p`
	color: var(--ion-color-medium-shade);
	font-size: 22px;
	line-height: 36px;
	margin-bottom: 23px;
	letter-spacing: -.02em;
`;


// =============================================================================
export const LargeSectionTextSubtext = styled.div`
	color: var(--ion-color-medium);
	font-size: 16px;
	margin-bottom: 8px;
	line-height: 1.78em;
	letter-spacing: -.028em;
`;


// =============================================================================
export const LargeSectionAudio = styled.div`
	margin: 30px auto;
	max-width: 350px;
`;


// =============================================================================
const LargeSectionWrapper = styled.div`
	margin-top: 120px;
	margin-bottom: 160px;
`;


// =============================================================================
type LargeSectionTextButtonProps = {
	url: string;
	history: History;
};

export const LargeSectionTextButton: React.FC<LargeSectionTextButtonProps> = (props: LargeSectionTextButtonProps) => {
	return (
		<IonButton onClick={(e) => {
			e.preventDefault();
			props.history.push(props.url);
		}}
		>
			More
		</IonButton>
	)
}


// =============================================================================
type LargeSectionProps = {
	children: React.ReactNode[];
};

export const LargeSection: React.FC<LargeSectionProps> = (props: LargeSectionProps) => {
	// This is because we allow the children content to determin what side
	// they show up on. Child[0] is on the left and child[1] is on the right.
	if (props.children.length !== 2) {
		throw new Error('LargeSection: Must have exactly two children');
	}

	return (
		<LargeSectionWrapper>
			<IonGrid style={{ maxWidth: '960px' }}>
				<IonRow>
					<IonCol size="12" sizeLg="6">
						{props.children[0]}
					</IonCol>
					<IonCol size="12" sizeLg="6">
						{props.children[1]}
					</IonCol>
				</IonRow>
			</IonGrid>
		</LargeSectionWrapper>
	);
};
