import React from 'react';
import { IonContent, IonRow, IonCol } from '@ionic/react';
import Section, { SectionText } from '../../common/Section';
import ProjectCard from '../../common/ProjectCard';
import BannerSection, { BannerSectionTitle, BannerSectionSubtitle } from '../../common/BannerSection';
import SkillList from './SkillList';

export default function SoftwarePage() {

	// ============================================================================
	return (
		<>
			<IonContent>
				<BannerSection imgPath='assets/img/software.jpg'>
					<BannerSectionTitle>&lt;Code/&gt;</BannerSectionTitle>
					<BannerSectionSubtitle>Code it all!</BannerSectionSubtitle>
				</BannerSection>

				<Section title='About Me'>
					<IonRow>
						<IonCol size="12">
							<SectionText>
								I've been writing code professionally for 20 years. In this industry, learning and applying information is
								an absolute must! TODO: Write more
							</SectionText>
						</IonCol>
					</IonRow>
				</Section>

				<Section title='Skillset (Sorted Alphabetically)'>
					<SkillList title="Languages">
						<span>Assembly (x86, 6502), C++, C#, CSS, HTML, JavaScript, JSON, PHP, SASS, SQL, TypeScript, XML</span>
					</SkillList>
					<SkillList title="3rd Party/Libs">
						<span>Angular, AngularJS, Bootstrap, DirectX, Ionic, jQuery, Material, NodeJS, React, Redux, Stripe</span>
					</SkillList>
					<SkillList title="Software">
						<span>Chrome Debugging Tools, Git, Mercurial, Office, Photoshop, Visual Studio, VSCode</span>
					</SkillList>
					<SkillList title="AWS">
						<span>Api Gateway, Athena, Aurora, Cloud9, Cognito, DynamoDb, EC2, Glue, Lambda (NodeJS), Route53, S3, Step Functions, SQS</span>
					</SkillList>
				</Section>


				{
					/*******************************************************
					 * Professional Experience Section
					 *******************************************************/
				}
				<Section title='Professional Experience'>
					<ProjectCard
						company='Best Friends Animal Society'
						position='Senior Application Architect'
						time='Remote, (2/2016 - Present)'
						summary='Lead system architect and engineer responsible for systems design, coding, and mentoring colleagues'
						tech='C#, SQL, Angular, Ionic, NodeJS, AWS'
						bullets={[
							'Designed and currently coding the data lake for data acquisition, analytics, and integration to 3rd party SAAS websites',
							'Single handedly ported all data from our various shelter systems into one system using creative coding solutions to solve a vast number of issues',
							'Used AWS to generate custom reports for animals pulled from our shelter API for government reporting',
							'Developed system for importing constituent and reservation data from a SAAS system into CRM',
							'Provide leadership direction in integrating various technologies'
						]}
					>
					</ProjectCard>

					<ProjectCard
						company='Stilman Advanced Strategies, LLC.'
						position='Senior Software Engineer'
						time='Remote (10/2013 - 10/2015)'
						summary='Lead UI engineer responsible for design and implementation of the frontend interface for the server simulation engine, which allows users to create military training scenarios by placing friendly and hostile units, map geometry, and mission orders'
						tech='AngularJS, C++, Bootstrap, LeafletJS'
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

					<ProjectCard
						company='Freelance'
						position='Software Engineer'
						time='Remote (11/2008 - 10/2013)'
						summary='During my aviation career, I developed web solutions and enhancements for a variety of client needs. Used a combination of PHP, SQL, Javascript, and jQuery'
						tech='PHP, SQL, Javascript, and jQuery'
						bullets={[
							'Onedotabove.com – Designed and built an aviation web application that allows instructors to create customized lessons and track student progress through multiple curriculums. Used jQuery/jQueryUI, PHP, and SQL',
							'Westboundcommunications.com – Built a custom theme for Wordpress site and created a plugin for the client to upload and edit information laid out in a timeline format. Used jQuery, PHP, and SQL',
							'Angelcityflyers.com – Rebuilt and overhauled the company website onto Wordpress with a customized theme. Setup an online store and form submissions. Used PHP, SQL and Javascript'
						]}
					>
					</ProjectCard>

					<ProjectCard
						company='Electronic Arts, Inc.'
						position='Software Engineer II'
						time='Los Angeles, CA &amp; Vancouver, BC (10/2003 - 11/2008)'
						summary='Shipped 4 games in 5 years. Excellent generalist engineer able to work in a variety of different areas. Dependability earned me the nick-name "Rock Solid."'
						tech='C++, C#, XML, Flash, Actionscript'
						bullets={[
							'Red Alert 3 (PC, Xbox360) – Shipped 10/2008: Tools and Pipeline using C# and MFC; Graphics using FX shaders and C++; Gameplay using C++/XML/XSD; Optimization using PIX, Xbperfview, and VTune; UI using Flash/Actionscript/C++',
							'Command & Conquer 3 (Xbox360) – Shipped 5/2007: Lead UI programmer using Flash/Actionscript/C++',
							'Battle For Middle Earth 2 (Xbox 360) – Shipped 7/2006: Audio programming: Converted the audio engine from Miles to a custom EA library. Added 5.1 surround sound support; UI Programming',
							'NBA Street Showdown (PSP) – Shipped 4/2005: Ported the Xbox version to the PSP. Programmed the ‘Shot Blocker’ minigame and assisted with design. Optimized and reduced the memory footprint'
						]}
					>
					</ProjectCard>

					<ProjectCard
						company='California State University Long Beach'
						position='Teaching Assistant'
						time='Long Beach, CA (8/2001 - 5/2002)'
						summary='Supervised and instructed students for the lab portion of the Assembly Level Programing course. Also, taught one class pertaining to game programming in Assembly for Windows'
						tech='Assembly (x86), Windows32 API from Assembly, Direct3D'
						bullets={[
							'Conducted impromptu lectures for things relevant to the entire class for their projects',
							'Provided one-on-one instruction for students\' projects',
							'Specialized in guiding students to solve problems on their own'
						]}
					>
					</ProjectCard>

					<ProjectCard
						company='Porrazzo Strategic Technologies, Inc.'
						position='Software Engineer (06/1999 to 01/2001)'
						time='Fair Oaks, CA'
						summary='Performed programming and network administration tasks for a start-up company specializing in audio speakers and input devices'
						tech='C++, Windows32 API, Direct3D'
						bullets={[
							'Led a team of programmers to design and implement a new serial-port joystick device driver for Windows 95, 98,	and ME. The new device driver allowed users to move their hands in front of custom speakers to control the X, Y, and Z axis and up to four buttons. Implemented the driver using low level assembly, C, VJoy, and VxD’s',
							'Developed 3D multimedia software and video game interfaces using DirectX for demonstrating the new 3-axis, 4 button joystick',
							'Network administration tasks including troubleshooting and hardware/software installs'
						]}
					>
					</ProjectCard>
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
					<ProjectCard
						company='Nextchordapp.com'
						position='Software Engineer'
						time='Remote (1/2019 - Present)'
						summary='Ionic 4 app that applies music theory principles to allow users to build complex chord progressions in any key. Currently written in Angular but I am porting it to React'
						tech='Angular 7, Ionic, AWS, React/Redux conversion in progress'
						bullets={[
							'Utilizes functional harmony, borrowed chords, secondary dominant/diminished chords, common tone chords and more',
							'Allows user to playback the chord progression in the browser and edit voice leading',
							'Ability to save chord progression and guiding text to a MusicXML file for import into other music programs',
							'Code is private but I can demonstrate'
						]}
					/>

					<ProjectCard
						company='Stratawork.ca'
						position='Software Engineer'
						time='Remote (10/2016 - Present)'
						summary='Condo management system for the strata council, managers, and unit owners to communicate, manage units and occupants, and share documents'
						tech='Angular 4, PHP, Slim Rest Api framework, JWT, MaterializeCSS, AWS, Stripe, Mailgun'
						bullets={[
							'Angular 4 frontend built on top of MaterializeCSS framework',
							'PHP Backend for user login, document storage, and database management',
							'PHP integration with Stripe for the subscription system',
							'PHP integration with Mailgun for the Email delivery system',
							'JWT Token authentication for all API Endpoints'
						]}
					/>

					<ProjectCard
						company='Algorithmic Trading Simulator'
						position='Software Engineer'
						time='Remote (9/2014 - 1/2016)'
						summary='Simulator to run large numbers of trading strategies on user defined lists of stocks. For each day a buy list is generated for the stocks that have the highest probability to win based on the strategies run'
						tech='C#, JSON.NET, AngularJS, Bootstrap, and the Highstocks charting plugin'
						bullets={[
							'Strategies can depend on other strategies which allows for easy implementation of chained complex strategies',
							'Made a strategy to analyze the success of all permutations of entry signals from a variety of different indicators',
							'Code can be viewed at https://github.com/nikgavalas/stock-simulator'
						]}
					/>

					<ProjectCard
						company='Nintendo Emulator'
						position='Software Engineer'
						time='Remote (10/1998 – 04/2002)'
						summary='Developed a Nintendo Entertainment System (NES) Emulator for Windows / DirectX. I started it during my first semester at college and then rewrote it during my last semester at college. An instructional paper was also written'
						tech='C++, DirectX, Assembly (x86 and 6502), Windows32 API'
						bullets={[
							'Emulator used .dll plugins to implement the various memory mappers that the NES used',
							'NES’s 6502 Motorola CPU was emulated in x86 assembly language',
							'NES’s Graphics were emulated using a Scanline engine in C/C++ and DirectX',
							'Emulator featured an extensive debugger displaying a realtime look at the source, registers, and other internals of the NES. This was all integrated into the GUI using multi-threading, .dlls, and the Windows32 API',
							'Code can be viewed at https://github.com/nikgavalas/NEStreme'
						]}
					/>

				</Section>
			</IonContent>
		</>
	)
}