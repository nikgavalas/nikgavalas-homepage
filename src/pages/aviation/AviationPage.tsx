import React from 'react';
import { IonContent } from '@ionic/react';

// ============================================================================
type AviationPageProps = {
	history: History;
};

const AviationPage: React.FC<AviationPageProps> = (props: AviationPageProps) => {
	return (
		<>
			<IonContent>
				<img src="assets/img/about.jpg" alt="Me!" />
			</IonContent>
		</>
	)
}

export default AviationPage;
