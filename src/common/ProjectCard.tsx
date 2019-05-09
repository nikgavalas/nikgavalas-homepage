import React, { useState } from 'react';
import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import DetailsModal from './DetailsModal';
import styled from 'styled-components';
import { ProjectTypographyImage, ProjectTypographyTitle, ProjectTypographySubtitle, ProjectTypographyBody, ProjectTypographyTech } from './ProjectTypography';


// =============================================================================
const ProjectTypographyWrapper = styled.div`
	margin: 50px 0;
`;




// =============================================================================
type ProjectTypographyProps = {
	company: string;
	position: string;
	time: string;
	summary: string;
	tech: string;
	img: string;
	bullets: string[]
};

const ProjectTypography: React.FC<ProjectTypographyProps> = (props: ProjectTypographyProps) => {
	const [shouldShowModal, setShouldShowModal] = useState(false);

	return (
		<ProjectTypographyWrapper>
			<IonGrid>
				<IonRow>
					<IonCol size="12" sizeLg="3">
						<div style={{textAlign: 'center'}}>
							<ProjectTypographyImage src={props.img} alt="card"></ProjectTypographyImage>
						</div>
					</IonCol>
					<IonCol size="12" sizeLg="9">
						<ProjectTypographyTitle>{props.company}</ProjectTypographyTitle>
						<ProjectTypographySubtitle>{props.position}</ProjectTypographySubtitle>
						<ProjectTypographySubtitle>{props.time}</ProjectTypographySubtitle>
						<ProjectTypographyBody>{props.summary}</ProjectTypographyBody>
						<ProjectTypographyTech>{props.tech}</ProjectTypographyTech>
						<IonButton
							onClick={() => setShouldShowModal(true)}
							strong={true}
						>
							Learn More
						</IonButton>
					</IonCol>
				</IonRow>
			</IonGrid>
			<DetailsModal
				title={props.company}
				subtitle={props.position}
				extra={props.time}
				summary={props.summary}
				img={props.img}
				bullets={props.bullets}
				shouldShowModal={shouldShowModal}
				setShouldShowModal={setShouldShowModal} />
		</ProjectTypographyWrapper>
	)
};

export default ProjectTypography;