import React from 'react';
import { IonContent } from '@ionic/react';
import BannerSection, { BannerSectionTitle, BannerSectionSubtitle } from '../../common/BannerSection';
import { LargeSection, LargeSectionText, LargeSectionTextTitle, LargeSectionTextBody } from '../../common/LargeSection';
import LargeSectionImage from '../../common/LargeSectionImage';


// ============================================================================
type MusicPageProps = {
};

const MusicPage: React.FC<MusicPageProps> = (props: MusicPageProps) => {
	return (
		<>
			<IonContent>
				<BannerSection imgPath='assets/img/me.jpg'>
					<BannerSectionTitle>Music</BannerSectionTitle>
					<BannerSectionSubtitle>Metal guitarist/composer; and a full time dreamer</BannerSectionSubtitle>
				</BannerSection>

				<LargeSection>
					<LargeSectionImage imgSource='https://via.placeholder.com/400/09f/fff.png'></LargeSectionImage>
					<LargeSectionText>
						<LargeSectionTextTitle>Republic Airways</LargeSectionTextTitle>
						<LargeSectionTextBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at massa arcu. Nunc erat urna, porttitor vehicula quam nec, tempus sodales ligula. Sed sodales ultricies tortor. Etiam ullamcorper urna at sem aliquet efficitur in porta tortor. Aliquam a urna in purus facilisis rhoncus. </LargeSectionTextBody>
					</LargeSectionText>
				</LargeSection>

				<LargeSection>
					<LargeSectionText>
						<LargeSectionTextTitle>American Eagle Airlines</LargeSectionTextTitle>
						<LargeSectionTextBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at massa arcu. Nunc erat urna, porttitor vehicula quam nec, tempus sodales ligula. Sed sodales ultricies tortor. Etiam ullamcorper urna at sem aliquet efficitur in porta tortor. Aliquam a urna in purus facilisis rhoncus. </LargeSectionTextBody>
					</LargeSectionText>
					<LargeSectionImage imgSource='https://via.placeholder.com/400/09f/fff.png'></LargeSectionImage>
				</LargeSection>

				<LargeSection>
					<LargeSectionImage imgSource='https://via.placeholder.com/400/09f/fff.png'></LargeSectionImage>
					<LargeSectionText>
						<LargeSectionTextTitle>Angel City Flyers</LargeSectionTextTitle>
						<LargeSectionTextBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at massa arcu. Nunc erat urna, porttitor vehicula quam nec, tempus sodales ligula. Sed sodales ultricies tortor. Etiam ullamcorper urna at sem aliquet efficitur in porta tortor. Aliquam a urna in purus facilisis rhoncus. </LargeSectionTextBody>
					</LargeSectionText>
				</LargeSection>

			</IonContent>
		</>
	)
}

export default MusicPage;
