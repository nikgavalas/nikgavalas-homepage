import React from 'react';
import {
	IonContent, IonRow, IonCol
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
import Section, { SectionText } from '../../common/Section';

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

				<Section title='About Me'>
					<IonRow>
						<IonCol size="12">
							<SectionText>
								<p>
									I've been writing code professionally for 20 years. I first started with a love and passion for video games. NES was the video game system I grew up with and when I learned to code in High School, I started work on coding an NES Emulator. I finished it and then rewrote and improved it for a college self-directed course.
								</p>
								<p>
									My first job after college was working for Electronic Arts in Vancouver, Canada. I learned a ton there and transferred down to the LA offices to work on RTS games. I met a lot of great people whom I'm still friends with today. While at EA, I finally started my pilot training (which had been a life long dream). Little did I know...
								</p>
								<p>
									As I completed more pilot training, I couldn't resist the urge to try and make a living flying. I figured I only get one chance to try this before it's too late so, I made the difficult choice to completely change careers.
								</p>
								<p>
									Flying was a blast and the experiences were once in a lifetime! I wouldn't trade those in for anything in the world. I stayed busy working side coding jobs on my off days and during long overnights. Ultimately, being away from home so much and my passion for coding took over and it was time to return to my Software Engineering career.
								</p>
								<p>
								I am mostly focused on Full Stack development but I feel like I can learn and do just about anything these days. I look forward to seeing where the future takes me!
								</p>
							</SectionText>
						</IonCol>
					</IonRow>
				</Section>

				<LargeSection>
					<LargeSectionImage imgSource='assets/img/software-square.jpg'></LargeSectionImage>
					<LargeSectionText>
						<LargeSectionTextTitle>&lt;Code/&gt;</LargeSectionTextTitle>
						<LargeSectionTextBody>
							Throughout my career, I’ve become versed in a variety of programming languages and technologies. From high-performance video games using C++ to full stack engineering using a variety of different tech, I love learning and applying new ideas. My dependability at EA earned me the nickname "Rock Solid".
						</LargeSectionTextBody>
						<LargeSectionTextButton url='/software' history={props.history}></LargeSectionTextButton>
					</LargeSectionText>
				</LargeSection>

				<LargeSection>
					<LargeSectionText>
						<LargeSectionTextTitle>Music</LargeSectionTextTitle>
						<LargeSectionTextBody>
							I've always had a passion for music and I've been playing guitar since I was 19. Until recently, I never felt I could write music, only practice and play other peoples music. I finally did something about that and took some composition courses and I'm happy to say, I <strong>can</strong> write music!
						</LargeSectionTextBody>
						<LargeSectionTextButton url='/music' history={props.history}></LargeSectionTextButton>
					</LargeSectionText>
					<LargeSectionImage imgSource='assets/img/music-square.jpg'></LargeSectionImage>
				</LargeSection>

				<LargeSection>
					<LargeSectionImage imgSource='assets/img/erj145.jpg'></LargeSectionImage>
					<LargeSectionText>
						<LargeSectionTextTitle>Aviation</LargeSectionTextTitle>
						<LargeSectionTextBody>
							Being an Airline Pilot had been a life long dream of mine since as long as I can remember. After 5 years at EA, I finally had an opportunity to make that dream a reality! It was an amazing experience that I love to share with people, especially paired with beer.
						</LargeSectionTextBody>
						<LargeSectionTextButton url='/aviation' history={props.history}></LargeSectionTextButton>
					</LargeSectionText>
				</LargeSection>

			</IonContent>
		</>
	)
}

export default HomePage;
