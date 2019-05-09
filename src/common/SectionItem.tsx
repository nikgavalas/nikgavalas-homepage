import React from 'react';
import {
	IonGrid,
	IonRow,
	IonCol,
	IonText
} from '@ionic/react';

export type SectionItemProps = {
	isImageRight?: boolean;
	title: string;
	subtitle: string;
	summary: string;
	extra?: string;
	bullets: string[]
};

const SectionItem: React.SFC<SectionItemProps> = (props: SectionItemProps) => {
	return (
		<>
			<IonRow>
				<IonCol size="12" sizeSm="3" offsetMd="2" class="ion-padding" style={{
					display: 'flex',
					justifyContent: 'center'
				}}>
					<img src="https://via.placeholder.com/300/09f/fff.png" style={{
						alignSelf: 'center',
						borderRadius: '10%'
					}} />
				</IonCol>
				<IonCol size-sm="12" size-md="5" class="ion-padding">
					<IonText color="primary">
						<h1>{props.title}</h1>
					</IonText>
					<IonText color="medium">
						<div><strong>{props.subtitle}</strong></div>
					</IonText>
					{props.extra && (
						<IonText color="medium">
							<div>{props.extra}</div>
						</IonText>
					)}
					<p>{props.summary}</p>
					<ul style={{
						listStyleType: 'square',
						listStylePosition: 'inside',
						margin: 0,
						padding: 0
					}}>
						{props.bullets.map((bullet, index) =>
							<li key={index}>{bullet}</li>
						)}
					</ul>
				</IonCol>
			</IonRow>
		</>
	)
}

export default SectionItem;
