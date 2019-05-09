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
				<BannerSection imgPath='assets/img/aviation.jpg'>
					<BannerSectionTitle>Aviation</BannerSectionTitle>
					<BannerSectionSubtitle>From Flight Instructor to airline First Officer</BannerSectionSubtitle>
				</BannerSection>

				<LargeSection>
					<LargeSectionImage imgSource='assets/img/q400.jpg'></LargeSectionImage>
					<LargeSectionText>
						<LargeSectionTextTitle>Republic Airways</LargeSectionTextTitle>
						<LargeSectionTextBody>
							Based out of Kansas City and Denver I was a First Officer on the Bombardier Q400. I earned my ATP license and
							my Q400 type rating here. Flying in and out of the Rocky Mountains was both exciting and challenging. Ultimately,
							being away from home so often was what led me to hang up my wings. Flying in and out of Jackson Hole in Yellowstone was
							amazing! I wouldn't trade the sights and experiences for anything in the world!
						</LargeSectionTextBody>
					</LargeSectionText>
				</LargeSection>

				<LargeSection>
					<LargeSectionText>
						<LargeSectionTextTitle>American Eagle Airlines</LargeSectionTextTitle>
						<LargeSectionTextBody>
							Based out of Dallas and Los Angeles this was my first stop as an airline First Officer. The learning curve was like trying
							to take a sip of water from a firehose! Ultimately, I finished with high remarks and began an amazing journey. My trips
							often took me all over the US and Mexico with each flight providing a new experience.
						</LargeSectionTextBody>
					</LargeSectionText>
					<LargeSectionImage imgSource='assets/img/erj145.jpg'></LargeSectionImage>
				</LargeSection>

				<LargeSection>
					<LargeSectionImage imgSource='assets/img/twinstar.jpg'></LargeSectionImage>
					<LargeSectionText>
						<LargeSectionTextTitle>Angel City Flyers</LargeSectionTextTitle>
						<LargeSectionTextBody>
							As a full time flight instructor I learned what it takes to effectively teach students in
							high stress situations. I taught everything from Single to Multi Engine instruction with a
							heavy emphasis on instrument flying.
							I loved my time here and it was a difficult decision to leave. I had always
							dreamed of being an airline pilot and when presented with the opportunity, I had to take it!
						</LargeSectionTextBody>
					</LargeSectionText>
				</LargeSection>

			</IonContent>
		</>
	)
}

export default AviationPage;
