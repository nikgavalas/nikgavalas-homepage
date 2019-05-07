import React from 'react';
import { IonContent, IonRow, IonCol } from '@ionic/react';
import Section from '../../common/Section';
import ProjectCard from '../../common/ProjectCard';

export default function SoftwarePage() {

	// ============================================================================
	return (
		<>
			<IonContent>
				<img src='assets/img/software.jpg' alt='Me!' />

				{
					/*******************************************************
					 * Professional Experience Section
					 *******************************************************/
				}
				<Section
					title='Professional Experience'
				>
					<IonRow>
						<IonCol size="12" sizeMd="4">
							<ProjectCard
								title='Best Friends Animal Society'
								subtitle='Senior Application Architect'
								extra='Remote, 2/2016 to Present'
								summary='Lead system architect and engineer responsible for systems design, coding, and mentoring colleagues'
								bullets={[
									'Designed and currently coding the data lake for data acquisition, analytics, and integration to 3rd party SAAS websites',
									'Single handedly ported all data from our various shelter systems into one system using creative coding solutions to solve a vast number of issues',
									'Used AWS to generate custom reports for animals pulled from our shelter API for government reporting',
									'Developed system for importing constituent and reservation data from a SAAS system into CRM',
									'Provide leadership direction in integrating various technologies'
								]}
							>
							</ProjectCard>
						</IonCol>

						<IonCol size="12" sizeMd="4">
							<ProjectCard
								title='Stilman Advanced Strategies, LLC.'
								subtitle='Senior Software Engineer'
								extra='Remote, 10/2013 to 10/2015'
								summary='Lead UI engineer responsible for design and implementation of the frontend interface for the server simulation engine, which allows users to create military training scenarios by placing friendly and hostile units, map geometry, and mission orders'
								bullets={[
									'Redesigned and engineered the frontend interface from scratch',
									'Built the mapping and animation engine on top of LeafletJS to display map geometry, units as markers, engagements with enemy forces, casualties and health of all units, as well as animate unit routes',
									'Developed collaborative scenario creation allowing multiple clients to create one scenario at the same time using REST to get and store data on our server',
									'Developed many custom controls built on top of AngularJS and Bootstrap (Tree accordions, floating panel menu system like Google Maps, and many more)',
									'Designed and implemented REST API',
									'Trained colleagues to work within AngularJS and general web development'
								]}
							>
							</ProjectCard>
						</IonCol>

						<IonCol size="12" sizeMd="4">
							<ProjectCard
								title='Freelance'
								subtitle='Software Engineer'
								extra='Remote, 11/2008 to 10/2013'
								summary='During my aviation career, I developed web solutions and enhancements for a variety of client needs. Used a combination of PHP, SQL, Javascript, and jQuery'
								bullets={[
									'Onedotabove.com – Designed and built an aviation web application that allows instructors to create customized lessons and track student progress through multiple curriculums. Used jQuery/jQueryUI, PHP, and SQL',
									'Westboundcommunications.com – Built a custom theme for Wordpress site and created a plugin for the client to upload and edit information laid out in a timeline format. Used jQuery, PHP, and SQL',
									'Angelcityflyers.com – Rebuilt and overhauled the company website onto Wordpress with a customized theme. Setup an online store and form submissions. Used PHP, SQL and Javascript'
								]}
							>
							</ProjectCard>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol size="12" sizeMd="4">
							<ProjectCard
								title='Electronic Arts, Inc.'
								subtitle='Software Engineer II, 10/2003 to 11/2008'
								extra='Los Angeles, CA &amp; Vancouver, BC'
								summary='Shipped 4 games in 5 years. Excellent generalist engineer able to work in a variety of different areas. Dependability earned me the nick-name "Rock Solid."'
								bullets={[
									'Red Alert 3 (PC, Xbox360) – Shipped 10/2008: Tools and Pipeline using C# and MFC; Graphics using FX shaders and C++; Gameplay using C++/XML/XSD; Optimization using PIX, Xbperfview, and VTune; UI using Flash/Actionscript/C++',
									'Command & Conquer 3 (Xbox360) – Shipped 5/2007: Lead UI programmer using Flash/Actionscript/C++',
									'Battle For Middle Earth 2 (Xbox 360) – Shipped 7/2006: Audio programming: Converted the audio engine from Miles to a custom EA library. Added 5.1 surround sound support; UI Programming',
									'NBA Street Showdown (PSP) – Shipped 4/2005: Ported the Xbox version to the PSP. Programmed the ‘Shot Blocker’ minigame and assisted with design. Optimized and reduced the memory footprint'
								]}
							>
							</ProjectCard>
						</IonCol>

						<IonCol size="12" sizeMd="4">
							<ProjectCard
								title='California State University Long Beach'
								subtitle='Teaching Assistant, 8/2001 to 5/2002'
								extra='Long Beach, CA'
								summary='Supervised and instructed students for the lab portion of the Assembly Level Programing course. Also, taught one class pertaining to game programming in Assembly for Windows'
								bullets={[
									'Conducted impromptu lectures for things relevant to the entire class for their projects',
									'Provided one-on-one instruction for students\' projects',
									'Specialized in guiding students to solve problems on their own'
								]}
							>
							</ProjectCard>
						</IonCol>

						<IonCol size="12" sizeMd="4">
							<ProjectCard
								title='Porrazzo Strategic Technologies, Inc.'
								subtitle='Software Engineer, 06/1999 to 01/2001'
								extra='Fair Oaks, CA'
								summary='Performed programming and network administration tasks for a start-up company specializing in audio speakers and input devices'
								bullets={[
									'Led a team of programmers to design and implement a new serial-port joystick device driver for Windows 95, 98,	and ME. The new device driver allowed users to move their hands in front of custom speakers to control the X, Y, and Z axis and up to four buttons. Implemented the driver using low level assembly, C, VJoy, and VxD’s',
									'Developed 3D multimedia software and video game interfaces using DirectX for demonstrating the new 3-axis, 4 button joystick',
									'Network administration tasks including troubleshooting and hardware/software installs'
								]}
							>
							</ProjectCard>
						</IonCol>

					</IonRow>

				</Section>

				{
					/*******************************************************
					 * Personal Projects Section
					 *******************************************************/
				}

				<Section
					title='Personal Projects'
					background='rgb(238,238,238) linear-gradient(0deg, rgba(238,238,238,1) 0%, rgba(238,238,238,1) 38%, rgba(221,221,221,1) 100%)'
				>
					<IonRow>
						<IonCol size="12" sizeMd="4">
							<ProjectCard
								title='Ionic Music Theory Application'
								subtitle='1/2019 to Present'
								summary='Ionic 4 app that applies music theory principles to allow users to build complex chord progressions in any key. Currently written in Angular but I am porting it to React'
								bullets={[
									'Utilizes functional harmony, borrowed chords, secondary dominant/diminished chords, common tone chords and more',
									'Allows user to playback the chord progression in the browser and edit voice leading',
									'Ability to save chord progression and guiding text to a MusicXML file for import into other music programs',
									'Code is private but I can demonstrate'
								]}
							>
							</ProjectCard>
						</IonCol>
					</IonRow>
					{/*
					<SectionItem
						isImageRight={true}
						title='Ionic Music Theory Application'
						subtitle='1/2019 to Present'
						summary='Ionic 4 app that applies music theory principles to allow users to build complex chord progressions in any key. Currently written in Angular but I am porting it to React'
						bullets={[
							'Utilizes functional harmony, borrowed chords, secondary dominant/diminished chords, common tone chords and more',
							'Allows user to playback the chord progression in the browser and edit voice leading',
							'Ability to save chord progression and guiding text to a MusicXML file for import into other music programs',
							'Code is private but I can demonstrate'
						]}
					>
					</SectionItem>

					<SectionItem
						isImageRight={true}
						title='<a href="https://www.stratawork.ca target="_blank">Stratawork.ca</a>'
						subtitle='10/2017 to Present'
						summary='Stratawork'
						bullets={[
						]}
					>
					</SectionItem>
 */}
				</Section>
			</IonContent>
		</>
	)
}