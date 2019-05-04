import React, { ReactNode } from 'react';
import {
	IonGrid,
	IonRow,
	IonCol
} from '@ionic/react';
import SectionItem, { SectionItemProps } from './SectionItem';

type SectionProps = {
	background?: string;
	title: string;
	children: ReactNode;
};

const Section: React.SFC<SectionProps> = (props: SectionProps) => {
	return (
		<div style={{
			display: 'flex',
			alignItems: 'center',
			padding: '50px 0 50px',
			background: props.background
		}}
		>
			<IonGrid fixed>
				<IonRow>
					<IonCol class="ion-text-center ion-margin">
						<h1 className="ion-text-uppercase">{props.title}</h1>
					</IonCol>
				</IonRow>
				{props.children}
			</IonGrid>
		</div>
	)
}

export default Section;
