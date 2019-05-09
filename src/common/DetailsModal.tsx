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
import { ProjectTypographyImage, ProjectTypographyTitle, ProjectTypographySubtitle, ProjectTypographyBody, ProjectTypographyTech } from './ProjectTypography';


type DetailsModalProps = {
	shouldShowModal: boolean;
	setShouldShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	subtitle: string;
	summary: string;
	img: string;
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
							<IonCol size="12" sizeLg="3">
								<div style={{textAlign: 'center'}}>
									<ProjectTypographyImage src={props.img} alt="card"></ProjectTypographyImage>
								</div>
							</IonCol>
							<IonCol size="12" sizeLg="9">
								<ProjectTypographyTitle>{props.title}</ProjectTypographyTitle>
								<ProjectTypographySubtitle>{props.subtitle}</ProjectTypographySubtitle>
								<ProjectTypographySubtitle>{props.extra}</ProjectTypographySubtitle>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol>
								<ProjectTypographyBody>{props.summary}</ProjectTypographyBody>
								<ProjectTypographyTech>
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
								</ProjectTypographyTech>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonContent>
			</IonModal>
		</>
	);
};

export default DetailsModal;
