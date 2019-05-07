import React from 'react';
import { IonContent } from '@ionic/react';


// ============================================================================
type MusicPageProps = {
	history: History;
};

const MusicPage: React.FC<MusicPageProps> = (props: MusicPageProps) => {
	return (
		<>
			<IonContent>
				<img src="assets/img/music.jpg" alt="Me!" />
			</IonContent>
		</>
	)
}

export default MusicPage;
