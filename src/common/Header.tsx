import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { PAGE_ROUTES } from './pageRoutes';

interface Props {
	history: History;
}

const Header: React.SFC<Props> = ({ history }) => {
	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton class="ion-hide-lg-up"></IonMenuButton>
						<IonButton onClick={(e) => {
							e.preventDefault();
							history.push('/');
						}}
						>
							Nik Gavalas
					</IonButton>
					</IonButtons>
					<IonButtons slot="end" class="ion-hide-md-down">
						{PAGE_ROUTES.map(pageRoute => (
							<IonButton key={pageRoute.path} onClick={(e) => {
								e.preventDefault();
								history.push(pageRoute.path);
							}}
							>
								{pageRoute.title}
							</IonButton>
						))}
					</IonButtons>
				</IonToolbar>
			</IonHeader>
		</>
	)
}

export default withRouter(Header);
