import React, { useRef } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon } from '@ionic/react';
import { PAGE_ROUTES, PageRoute } from './pageRoutes';
import { History } from 'history';
import { withRouter } from 'react-router-dom';

interface Props {
	history: History;
}

const Menu: React.FC<Props> = ({ history }) => {
	const menuEl = useRef<HTMLIonMenuElement>(null);

	const menuLinks: PageRoute[] = [{
		path: '/',
		title: 'Home',
		icon: 'home'
	}, ...PAGE_ROUTES];

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
						{menuLinks.map(pageRoute => (
							<IonItem key={pageRoute.path} onClick={(e) => {
								e.preventDefault();

								// Close the menu if we click a nav item on it.
								if (menuEl.current) {
									menuEl.current.close();
								}

								history.push(pageRoute.path);
							}}
							>
								{pageRoute.icon && <IonIcon slot="start" name={pageRoute.icon}></IonIcon>}
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