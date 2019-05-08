import React from 'react';
import { IonContent } from '@ionic/react';
import BannerSection, { BannerSectionTitle, BannerSectionSubtitle } from '../../common/BannerSection';
import { LargeSection, LargeSectionText, LargeSectionTextTitle, LargeSectionTextBody } from '../../common/LargeSection';
import LargeSectionImage from '../../common/LargeSectionImage';


// ============================================================================
type AviationPageProps = {
};

const AviationPage: React.FC<AviationPageProps> = (props: AviationPageProps) => {
	return (
		<>
			<IonContent>
				<BannerSection imgPath='assets/img/me.jpg'>
					<BannerSectionTitle>Aviation</BannerSectionTitle>
					<BannerSectionSubtitle>From flight instructor to airline First Officer</BannerSectionSubtitle>
				</BannerSection>

				<LargeSection>
					<LargeSectionImage align='left'></LargeSectionImage>
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
					<LargeSectionImage align='right'></LargeSectionImage>
				</LargeSection>

				<LargeSection>
					<LargeSectionImage align='left'></LargeSectionImage>
					<LargeSectionText>
						<LargeSectionTextTitle>Angel City Flyers</LargeSectionTextTitle>
						<LargeSectionTextBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at massa arcu. Nunc erat urna, porttitor vehicula quam nec, tempus sodales ligula. Sed sodales ultricies tortor. Etiam ullamcorper urna at sem aliquet efficitur in porta tortor. Aliquam a urna in purus facilisis rhoncus. </LargeSectionTextBody>
					</LargeSectionText>
				</LargeSection>

			</IonContent>
		</>
	)
}

export default AviationPage;
