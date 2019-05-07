import React from 'react';
import {
	IonContent
} from '@ionic/react';
import {
	LargeSection,
	LargeSectionText,
	LargeSectionTextTitle,
	LargeSectionTextBody,
	LargeSectionTextButton
} from '../../common/LargeSection';
import LargeSectionImage from '../../common/LargeSectionImage';
import { History } from 'history';
import BannerSection, { BannerSectionTitle, BannerSectionSubtitle } from '../../common/BannerSection';

type HomePageProps = {
	history: History;
};

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {

	// ============================================================================
	return (
		<>
			<IonContent>
				<BannerSection imgPath='assets/img/me.jpg'>
					<BannerSectionTitle>Nik Gavalas</BannerSectionTitle>
					<BannerSectionSubtitle>Coder. Musician. Pilot.</BannerSectionSubtitle>
				</BannerSection>

				<LargeSection>
					<LargeSectionImage align='left'></LargeSectionImage>
					<LargeSectionText>
						<LargeSectionTextTitle>&lt;Code/&gt;</LargeSectionTextTitle>
						<LargeSectionTextBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at massa arcu. Nunc erat urna, porttitor vehicula quam nec, tempus sodales ligula. Sed sodales ultricies tortor. Etiam ullamcorper urna at sem aliquet efficitur in porta tortor. Aliquam a urna in purus facilisis rhoncus. </LargeSectionTextBody>
						<LargeSectionTextButton url='/software' history={props.history}></LargeSectionTextButton>
					</LargeSectionText>
				</LargeSection>

				<LargeSection>
					<LargeSectionText>
						<LargeSectionTextTitle>Music</LargeSectionTextTitle>
						<LargeSectionTextBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at massa arcu. Nunc erat urna, porttitor vehicula quam nec, tempus sodales ligula. Sed sodales ultricies tortor. Etiam ullamcorper urna at sem aliquet efficitur in porta tortor. Aliquam a urna in purus facilisis rhoncus. </LargeSectionTextBody>
						<LargeSectionTextButton url='/music' history={props.history}></LargeSectionTextButton>
					</LargeSectionText>
					<LargeSectionImage align='right'></LargeSectionImage>
				</LargeSection>

				<LargeSection>
					<LargeSectionImage align='left'></LargeSectionImage>
					<LargeSectionText>
						<LargeSectionTextTitle>Aviation</LargeSectionTextTitle>
						<LargeSectionTextBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at massa arcu. Nunc erat urna, porttitor vehicula quam nec, tempus sodales ligula. Sed sodales ultricies tortor. Etiam ullamcorper urna at sem aliquet efficitur in porta tortor. Aliquam a urna in purus facilisis rhoncus. </LargeSectionTextBody>
						<LargeSectionTextButton url='/about' history={props.history}></LargeSectionTextButton>
					</LargeSectionText>
				</LargeSection>

			</IonContent>
		</>
	)
}

export default HomePage;
