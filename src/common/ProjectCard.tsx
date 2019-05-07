import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonButton } from '@ionic/react';
import DetailsModal from './DetailsModal';

type ProjectCardProps = {
	title: string;
	subtitle: string;
	summary: string;
	extra?: string;
	bullets: string[]
};

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
	const [shouldShowModal, setShouldShowModal] = useState(false);

	return (
		<>
			<IonCard>
				<img src="https://via.placeholder.com/200/09f/fff.png" alt="card" />
				<IonCardHeader>
					<IonCardTitle style={{ height: '50px' }}>{props.title}</IonCardTitle>
					<IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
					<IonCardSubtitle>{props.extra}</IonCardSubtitle>
				</IonCardHeader>
				<IonCardContent style={{ height: '190px' }}>
					<p>{props.summary}</p>
				</IonCardContent>

				<IonItem lines="none">
					<IonButton
						onClick={() => setShouldShowModal(true)}
						slot="start"
						fill="clear"
						strong={true}
						size="default"
					>
						Learn More
					</IonButton>
				</IonItem>

			</IonCard>
			<DetailsModal
				title={props.title}
				subtitle={props.subtitle}
				extra={props.extra}
				summary={props.summary}
				bullets={props.bullets}
				shouldShowModal={shouldShowModal}
				setShouldShowModal={setShouldShowModal} />
		</>
	)
};

export default ProjectCard;