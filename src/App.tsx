import React from 'react';
import {
	IonApp,
	IonSplitPane,
	IonPage,
	IonRouterOutlet,
} from '@ionic/react';
import Menu from './common/Menu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import SoftwarePage from './pages/software/SoftwarePage';
import Header from './common/Header';
import MusicPage from './pages/music/MusicPage';
import AviationPage from './pages/aviation/AviationPage';


export default function App() {


	// ============================================================================
	return (
		<Router>
			<IonApp>
				<IonSplitPane contentId="main" when={false}>
					<Menu />
					<IonPage id="main">
						<Header />
						<IonRouterOutlet>
							<Route exact path="/" component={HomePage} />
							<Route exact path="/software" component={SoftwarePage} />
							<Route exact path="/music" component={MusicPage} />
							<Route exact path="/aviation" component={AviationPage} />
						</IonRouterOutlet>
					</IonPage>
				</IonSplitPane>
			</IonApp>
		</Router>
	)
}
