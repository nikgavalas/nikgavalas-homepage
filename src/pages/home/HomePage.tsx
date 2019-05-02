import React from 'react';
import {
	IonContent
} from '@ionic/react';
import Section from '../../common/Section';

export default function HomePage() {

	// ============================================================================
	return (
		<>
			<IonContent>
				<img src="assets/img/me.jpg" alt="Me!" />
				<Section />
			</IonContent>
		</>
	)
}