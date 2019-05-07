import React from 'react';
import {
	IonModal,
	IonHeader,
	IonToolbar,
	IonButton,
	IonButtons,
	IonContent,
	IonIcon,
	IonGrid,
	IonCol,
	IonRow
} from '@ionic/react';


type DetailsModalProps = {
	shouldShowModal: boolean;
	setShouldShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	subtitle: string;
	summary: string;
	extra?: string;
	bullets: string[]
};

const DetailsModal: React.FC<DetailsModalProps> = (props: DetailsModalProps) => {
	return (
		<>
			<IonModal
				isOpen={props.shouldShowModal}
				onDidDismiss={() => props.setShouldShowModal(false)}
			>
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="end">
							<IonButton onClick={() => props.setShouldShowModal(false)}>
								<IonIcon slot="start" name="close-circle"></IonIcon>
								Close
        			</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent padding>
					<IonGrid>
						<IonRow>
							<IonCol sizeSm="12" sizeMd="3">
								<img src="https://via.placeholder.com/200/09f/fff.png" />
							</IonCol>
							<IonCol sizeSm="12" sizeMd="9">
								<h3>{props.title}</h3>
								<h4>{props.subtitle}</h4>
								<h4>{props.extra}</h4>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol>
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
					</IonGrid>
				</IonContent>
			</IonModal>
		</>
	);
};

export default DetailsModal;
