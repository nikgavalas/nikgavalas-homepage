import React from 'react';
import { IonContent } from '@ionic/react';
import BannerSection, { BannerSectionTitle, BannerSectionSubtitle } from '../../common/BannerSection';
import { LargeSection, LargeSectionText, LargeSectionTextTitle, LargeSectionTextBody, LargeSectionAudio } from '../../common/LargeSection';
import Section from '../../common/Section';


// ============================================================================
type MusicPageProps = {
};

const MusicPage: React.FC<MusicPageProps> = (props: MusicPageProps) => {
	return (
		<>
			<IonContent>
				<BannerSection imgPath='assets/img/music.jpg'>
					<BannerSectionTitle>Music</BannerSectionTitle>
					<BannerSectionSubtitle>Metal guitarist/composer; and a full time dreamer</BannerSectionSubtitle>
				</BannerSection>

				<Section title='Metal Pieces'>
					<LargeSection>
						<LargeSectionText>
							<LargeSectionTextTitle>Beethoven's Nightmare</LargeSectionTextTitle>
							<LargeSectionTextBody>
								The final project of the <a href="artofcomposing.com">Art of Composing</a> Sonata Form course was to, well,
								write a Sonata. I decided to do it in Metal! I will say this is an early attempt at recording and mixing and
								it's not done very well. The structure and harmony is based off of Beethoven's first piano sonata and in my version
								it tells the story of a very bad dream Beethoven had of the future of music. He has a brief reprieve, followed
								by a deeper nightmare.
							</LargeSectionTextBody>
						</LargeSectionText>
						<LargeSectionAudio>
							<iframe title="Beethoven's Nightmare" width="100%" height="166" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/617806626&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
						</LargeSectionAudio>
					</LargeSection>

					<LargeSection>
						<LargeSectionText>
							<LargeSectionTextTitle>Flight of the Bumblebee</LargeSectionTextTitle>
							<LargeSectionTextBody>
								A cover of Flight of the Bumblebee adapted for guitar and overloaded with distortion! All picked, no hammer-ons
								or pull-offs, that would just be cheating.
							</LargeSectionTextBody>
						</LargeSectionText>
						<LargeSectionAudio>
							<iframe title="Flight of the Bumblebee" width="100%" height="166" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/617807250&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
						</LargeSectionAudio>
					</LargeSection>

					<LargeSection>
						<LargeSectionText>
							<LargeSectionTextTitle>Metal Groove</LargeSectionTextTitle>
							<LargeSectionTextBody>
								A simple groove I made to try and improve on recording and mixing.
								I eventually got some great help from the guys at Presets for all.
							</LargeSectionTextBody>
						</LargeSectionText>
						<LargeSectionAudio>
							<iframe title="Metal Groove" width="100%" height="166" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/617818221&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
						</LargeSectionAudio>
					</LargeSection>
				</Section>

				<Section
					title='Piano Pieces'
					background='rgb(238,238,238) linear-gradient(0deg, rgba(238,238,238,1) 0%, rgba(238,238,238,1) 38%, rgba(221,221,221,1) 100%)'
				>
					<LargeSection>
						<LargeSectionText>
							<LargeSectionTextTitle>The Queen's Way</LargeSectionTextTitle>
							<LargeSectionTextBody>
								First short small ternary piece I wrote for the final project from my online course at&nbsp;
								<a href="artofcomposing.com">Art of Composing</a>. At the time, I was thinking of my daughter
								prancing around telling everyone what to do.
							</LargeSectionTextBody>
						</LargeSectionText>
						<LargeSectionAudio>
							<iframe title="The Queen's Way" width="100%" height="166" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/617794797&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
						</LargeSectionAudio>
					</LargeSection>

					<LargeSection>
						<LargeSectionText>
							<LargeSectionTextTitle>Borrowed Time</LargeSectionTextTitle>
							<LargeSectionTextBody>
								Second short small ternary piece I wrote for the final project from my online course at&nbsp;
								<a href="artofcomposing.com">Art of Composing</a>. The name is because it uses borrowed chords
								and the rhythm is based of the tick tock of a clock.
							</LargeSectionTextBody>
						</LargeSectionText>
						<LargeSectionAudio>
							<iframe title="Borrowed Time" width="100%" height="166" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/617804823&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
						</LargeSectionAudio>
					</LargeSection>
				</Section>

			</IonContent>
		</>
	)
}

export default MusicPage;
