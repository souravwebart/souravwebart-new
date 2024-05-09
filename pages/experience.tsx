/** @format */

import React from 'react';
import Image from 'next/image';
import Stackkaroo from '../public/images/Stackkaroo (4) (2).svg';
import Rm from '../public/images/Logo RM-02.png';
import Turtle from '../public/images/Turtle-log.webp';
import Thumbstack from '../public/images/thumbstack_logo.png';
import Ofs from '../public/images/ofs (2).png';
import EIntellisense from '../public/images/E-Intellisense.jpeg';
import Aartisto from '../public/images/AArtisto (1).png';
import DMS from '../public/images/dailymyshopping.png';
import Neepco from '../public/images/neepco.png';
import Twenty19 from '../public/images/twenty19.png';
import JungliDonkey from '../public/images/junglidonkey.png';
import TruckPaPa from '../public/images/truckpapa.jpg';
import Nearbuy from '../public/images/nearbuy.png';
import PWD from '../public/images/pwd.jpg';
import Ongc from '../public/images/ongc.png';

function experience() {
	const experienceData = [
		{
			title: 'Founder and Director',
			desc: '1. Establish and maintain UX design standards, guidelines, and best practices to ensure consistency and quality across all enterprise applications. Collaborate closely with cross-functional teams, including Customer, product management, engineering, and marketing, to ensure a unified and seamless user experience. 2. Conduct user research and usability testing to validate design decisions and improve the user experience. Collaborate with cross-functional teams, developers, and product managers, to ensure that designs are implemented effectively and meet customer needs. Revise existing designs to meet customer expectations.',
			logo: Stackkaroo,
			date: 'July 2023 - Present',
			company:
				'Stackkaroo - Explorogent International Services Private Limited',
		},
		{
			title: 'Web Developer (Freelence)',
			desc: '1. Collaborate with other engineers and develop a functional and visually appealing website. Communicate with internal stakeholders to understand their requirements and translate them into buildable technical solutions. Break down high-level objectives into specific software development tasks and follow through on execution. 2. Ensure all aspects of user experience are optimized for improved usability, workflow, and visual design. Design graphic user interface elements, like menus, tabs, and widgets. Develop UI/UX mockups & prototypes that clearly illustrate how sites function. Interpreting storyboards to tell visual stories that support learning.',
			logo: Rm,
			date: 'Jan 2024 - Present',
			company: 'Reltifraps Marketing',
		},
		{
			title: 'Web Developer (Freelence)',
			desc: '1. Plan and Meet with stakeholders to determine the scope of the projects and advise based on the product app. Develops UI/UX prototypes and designs for mobile apps that clearly illustrate with wire-framing tools how the application functions and looks. Develop flow diagrams, wireframes, and UI/UX Spec documentation. 2. Analyse, monitor, and create feasibility analyses provide accurate effort estimates, and produce high-quality deliverables promptly. Optimize website performance for speed, agility, and better user experience. Keep in touch with technological advancements and incorporate innovations into products',
			logo: Turtle,
			date: 'Oct 2023 - Mar 2024',
			company: 'Turtle - A Digital Brand Inc',
		},
		{
			title: 'Front-End Development (Full-Time)',
			desc: '1. Worked on projects using React.Js and Next.js. Worked on HTML, CSS, JavaScript, Typescript, and more. Working On API Integration. Coordinating with the Backend Developer. Made various Websites using WordPress based on Figma Design. Analyze market trends and user feedback to plan and optimize the website layout.2. Deliver high-quality, on-brand graphics to support a superior customer experience. Maintain a set of best design practices and guidelines to reduce and minimize production efforts. Produce creative assets including graphics, templates, and layouts, and visual standards for marketing activities across multiple channels.',
			logo: Thumbstack,
			date: 'JDec 2021 - Jul 2023',
			company: 'Thumbstack Technologies',
		},
		{
			title: 'Html developer (Internship)',
			desc: 'Worked on a Kiosk project using HTML, CSS, and JavaScript. Worked on the Shopify Website. Forecasts resource needs and allocates assigned resources to ensure completion of established objectives within scheduled guidelines. Ensure responsibility for seeing projects through to completion from concept & design production.',
			logo: Thumbstack,
			date: 'Sept 2021 - Dec 2021',
			company: 'Thumbstack Technologies',
		},
		{
			title: 'Web Developer (Internship)',
			desc: 'Optimize WordPress Website. Conduct competitor UX design analysis, and keep abreast of competitor products and industry design trends. Rapidly produce multiple prototypes, knowing when to apply pixel-perfect attention to detail, when to make low-fi sketches and prototypes, and familiarity with related platform',
			logo: Ofs,
			date: 'May 2022 - Aug 2022',
			company: 'Optimize For SEO - Digital Marketing Agency',
		},
		{
			title: 'Web Developer (Part-Time)',
			desc: 'Execute a comprehensive UI/UX strategy aligned with business objectives, fostering a culture of user-centricity. Drive discovery work to build personas and user journeys & document user research findings. Lead a multidisciplinary team of UI/UX professionals, UX designers, and architects, fostering growth and collaboration.',
			logo: Ofs,
			date: 'Aug 2021 - May 2022',
			company: 'Optimize For SEO - Digital Marketing Agency',
		},
		{
			title: 'Web Developer (Internship)',
			desc: 'Analyzing, establishing, and managing a graphic design business that aims to assist companies in brand development. Developed creative advertising content for various media, including posters, business cards, and email design. Design and develop Video Editing for the Home Page of Buynuse.com in Adobe Premiere Pro.',
			logo: EIntellisense,
			date: 'Feb 2022 - March 2022',
			company: 'E-Intellisense',
		},
		{
			title: 'Web Developer (Internship)',
			desc: 'Optimize Loading Speed of WordPress Website. Restored WordPress Website. Worked on HTML, CSS, JavaScript, Bootstrap, PHP, React.js, Next.js, API, and more. Worked with design team and social media managers to brainstorm, and produce engaging on-brand content across several social media platforms.',
			logo: Aartisto,
			date: 'Aug 2021 - Dec 2021',
			company: 'Aartisto Digital Solutions',
		},
		{
			title: 'Wordpress Developer and SEO executive (Full-Time)',
			desc: 'Work closely with the Digital Marketing Managers and the management to explore new strategies. Analyze campaigns and the behavior of the users through third-party attribution and analytics tools. Make analytics and data-driven decisions to optimize campaigns to achieve objectives. Reporting on campaign effectiveness.',
			logo: DMS,
			date: 'Oct 2021 - Feb 2021',
			company: 'Dailymyshopping online service pvt.Ltd',
		},
		{
			title: 'Graduate apprenticeship civil',
			desc: 'Project - 1: Corporate Social Responsibility (CSR) Scheme New Community toilet construction block under AGTCCPP, NEEPCO LTD. Project - 2: Corporate Social Responsibility (CSR) Scheme New water storage tanks under AGTCCPP, NEEPCO LTD. Project - 3: New car shade Construction at Hospital Building, AGTCCPP, NEEPCO LTD. Project - 4: Exterior and Interior painting of Colony complex, AGTCCPP, NEEPCO LTD. Project - 5: Construction of New Road Group - A, B, and C (750 Meter each) at plant Area Complex, AGTCCPP, NEEPCO LTD. Project - 6: New drain construction work, Plant area of AGTCCPP, NEEPCO LTD',
			logo: Neepco,
			date: 'Nov 2019 - Jan 2021',
			company: 'North Eastern Electric Power Corporation (Neepco) ',
		},
		{
			title: 'Twenty19.com as a campus Ambasssador program (Internship)',
			desc: 'Lead the Twenty19 Community on my campus. Promote the Online Courses concept and help students to learn new skills. Publicize Twenty19 Courses in my college and local student community. Create awareness among students about how internship opportunities in Twenty19 can help to achieve goals and also earn an income.',
			logo: Twenty19,
			date: 'Dec 2016 - Jun 2017',
			company: 'Twenty19.com',
		},
		{
			title:
				'Junglidonkey.com worked as a Graphics Designer and social Media marketing Manager (Internship)',
			desc: 'Facebook Ads campaign. Maintained Group and Page. Daily Post with Hash Tag. Achieve maximum ROI in paid search campaigns using analysis of data and staying on budget. Optimize creatives and promotional text for Search Ads marketing campaigns. Understand the relationship between paid and organic placements.',
			logo: JungliDonkey,
			date: 'Jan 2017 - Feb 2017',
			company: 'Junglidonkey.com',
		},
		{
			title:
				'TruckPaPa E-commerce pvt.Ltd as Social media marketing Manager (Internship)',
			desc: 'Collaborate with editorial, and development teams and create strategies for achieving KPIs. Measure KPIs and assign work responsibilities to the team: technical SEO Optimization and On-Page Optimization. Set quarterly performance targets and ensure all content campaigns are run within the given budgets and deadlines.',
			logo: TruckPaPa,
			date: 'Aug 2016 - Jan 2017',
			company: 'TruckPaPa E-commerce pvt.Ltd',
		},
		{
			title:
				'Nearbuy.com Incorporated in May 2010 as Groupon India pvt.Ltd as Digital Marketing Intern. (Internship)',
			desc: 'Digital Marketing with Off-Page SEO. Employed several data-related tools such as Google Analytics and Search Console in identifying trends, and opportunities in the business sites, and blogs to further ensure they are optimized to drive higher rankings. Track, and measure marketing outcomes – ROI, Build Marketing roadmap.',
			logo: Nearbuy,
			date: 'Nov 2016 - Dec 2016',
			company: 'Nearbuy.com Incorporated in May 2010 as Groupon India pvt.Ltd',
		},
		{
			title: 'Civil Trainee',
			desc: 'Worked on Tripuras First Fly Over Road',
			logo: PWD,
			date: 'Jun 2016 - July 2016',
			company: 'Public Work Department (PWD) agartala',
		},
		{
			title: 'Civil trainee',
			desc: 'Worked Water Supply and Cultural Building re-constuction Inside the ONGC Area',
			logo: Ongc,
			date: 'Jan 2016 - July 2016',
			company: 'Oil and Natural Gas Corporation Ltd',
		},
	];
	return (
		<div
			className='experiencepage'
			style={{ padding: '120px 0px', minHeight: '100vh' }}
		>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md-12 col-sm-12'>
						<div
							className='experience_heading'
							style={{ padding: '20px 10px', borderBottom: '2px solid #000' }}
						>
							<h1
								style={{
									fontSize: '1.15rem',
									fontFamily: 'DM Sans,sans-serif',
									color: '#000',
									lineHeight: '1.7rem',
								}}
							>
								My Experience{' '}
							</h1>
							<h2
								className='subtopheading2'
								style={{
									fontSize: '2rem',
									fontFamily: 'DM Sans,sans-serif',
									color: '#000',
									lineHeight: '2.2rem',
									marginTop: '-12px',
								}}
							>
								I’ve worked with some amazing companies
							</h2>
						</div>
						<div className='experience_body'>
							{experienceData &&
								experienceData.map((item, id) => {
									return (
										<div
											className='experience_card'
											style={{
												padding: '50px 10px',
												borderBottom: '2px solid #000',
											}}
											key={id}
										>
											<div
												className='box1'
												style={{
													display: 'block',
													margin: 'auto',
													textAlign: 'center',
													padding: '15px',
												}}
											>
												{item && item.logo && (
													<Image
														src={item.logo}
														alt={item.company}
														width={150}
														height={150}
													></Image>
												)}
												{item && item.company && (
													<p
														style={{
															fontSize: '1.15rem',
															fontFamily: 'DM Sans,sans-serif',
															color: '#000',
															lineHeight: '1.7rem',
															margin: 'auto',
															fontWeight: 700,
															textAlign: 'center',
														}}
													>
														{item.company}
													</p>
												)}
											</div>
											<div className='box2'>
												{item && item.title && (
													<h1
														style={{
															fontSize: '1.5rem',
															fontFamily: 'DM Sans,sans-serif',
															color: '#000',
															lineHeight: '1.9rem',
															fontWeight: 'bold',
															padding: '20px 0px',
														}}
													>
														{item.title}
													</h1>
												)}
												{item && item.desc && (
													<h2
														style={{
															fontSize: '1rem',
															fontFamily: 'DM Sans,sans-serif',
															color: '#000',
															lineHeight: '1.7rem',
														}}
													>
														{item.desc}
													</h2>
												)}
											</div>
											<div
												className='box3'
												style={{
													display: 'flex',
													textAlign: 'center',
												}}
											>
												{item && item.date && (
													<h2
														style={{
															fontSize: '1.15rem',
															fontFamily: 'DM Sans,sans-serif',
															color: '#000',
															lineHeight: '1.7rem',
															margin: 'auto',
															fontWeight: 700,
														}}
													>
														{item.date}
													</h2>
												)}
											</div>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default experience;
