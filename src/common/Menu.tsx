import React, { useRef } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';
import { PAGE_ROUTES } from './pageRoutes';
import { History } from 'history';
import { withRouter } from 'react-router-dom';

interface Props {
	history: History;
}

const Menu: React.SFC<Props> = ({ history }) => {
	const menuEl = useRef<HTMLIonMenuElement>(null);

	return (
		<>
			<IonMenu ref={menuEl} side="start" contentId="main">
				<IonHeader>
					<IonToolbar>
						<IonTitle>Menu</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList>
						{PAGE_ROUTES.map(pageRoute => (
							<IonItem key={pageRoute.path} onClick={(e) => {
								e.preventDefault();

								// Close the menu if we click a nav item on it.
								if (menuEl.current) {
									menuEl.current.close();
								}

								history.push(pageRoute.path);
							}}
							>
								{pageRoute.title}
							</IonItem>
						))}
					</IonList>
				</IonContent>
			</IonMenu>
		</>
	);

}

export default withRouter(Menu);