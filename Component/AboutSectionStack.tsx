/** @format */

import Image from 'next/image';
import React from 'react';
import { AiFillRightCircle } from 'react-icons/ai';
import GoogleCode from '../public/GoogleCode.png';
import FullStack from '../public/Code.png';
import WordPress from '../public/WordPress.png';
import SEO from '../public/Positive Dynamic.png';
import Ui from '../public/Figma.png';
import Pm from '../public/Product Management.png';
import Pi from '../public/Product Knowledge.png';
import Pr from '../public/Product.png';
import Pp from '../public/Prototype.png';
import Pd from '../public/Product Architecture.png';
import Pw from '../public/Web.png';
import Pdesign from '../public/Edit Product.png';
import SOG from '../public/Increase.png';
import Sap from '../public/Post Ads.png';
import LaM from '../public/Leadership.png';

function AboutSectionStack() {
	const stackdata = [
		{
			title: 'Front-End Development',
			desc: '"Front-end development" focuses on building the user interface and experience of websites and applications. It involves coding with languages like HTML, CSS, JavaScript, NextJs, ReactJs, and Typescript to create visually appealing and interactive elements that users interact with directly. Front-end developers collaborate closely with designers and back-end developers to ensure seamless functionality.',
			icon: GoogleCode,
		},
		{
			title: 'Full-Stack Development',
			desc: 'Full-stack development refers to the ability to work on both the front-end and back-end of a web application. Full-stack developers are proficient in multiple programming languages and frameworks, enabling them to handle tasks ranging from user interface design to server-side logic and database management. They offer comprehensive expertise in web development.',
			icon: FullStack,
		},
		{
			title: 'Wordpress Development',
			desc: 'WordPress development involves building websites and web applications using the WordPress content management system (CMS). Developers customize themes, plugins, and functionality to meet client requirements. With its user-friendly interface and extensive plugin ecosystem, WordPress is a popular choice for creating diverse online platforms, from blogs to e-commerce sites.',
			icon: WordPress,
		},
		{
			title: 'Search Engine Optimization',
			desc: 'Search Engine Optimization (SEO) is the practice of enhancing a websites visibility in search engine results pages (SERPs) to increase organic traffic. It involves optimizing content, keywords, and metadata, improving site structure and performance, and earning quality backlinks. Effective SEO strategies aim to boost rankings and enhance user experience.',
			icon: SEO,
		},
		{
			title: 'UI/UX Design',
			desc: 'UI/UX Design focuses on creating intuitive and engaging user interfaces (UI) and user experiences (UX) for digital products. It involves understanding user needs, conducting research, wireframing, prototyping, and iterating designs based on user feedback. UI/UX designers aim to deliver seamless interactions and visually appealing designs that enhance user satisfaction and usability.',
			icon: Ui,
		},
		{
			title: 'Product Management',
			desc: 'Product Management involves overseeing the development, launch, and ongoing success of a product. Responsibilities include market research, defining product vision and strategy, prioritizing features, and coordinating cross-functional teams. Product managers act as the bridge between stakeholders, ensuring alignment with business goals and delivering value to customers throughout the product lifecycle.',
			icon: Pm,
		},
	];
	const pmData = [
		{
			title: 'Product Ideas',
			desc: 'Product Ideas explores innovative concepts for marketable goods, catering to diverse consumer needs and preferences. It delves into brainstorming, research, and development processes, aiming to create solutions that enhance everyday life or address specific challenges. From tech gadgets to sustainable goods, its a realm fueled by creativity and consumer-centric design.',
			icon: Pi,
		},
		{
			title: 'Product Research',
			desc: 'Product Research is the systematic investigation into consumer demands, market trends, and competitor offerings to inform product development and marketing strategies. It encompasses data analysis, consumer surveys, and trend forecasting to identify opportunities and mitigate risks. In a dynamic market landscape, thorough research is essential for informed decision-making and product success.',
			icon: Pr,
		},
		{
			title: 'Product Prototype',
			desc: 'A Product Prototype is a preliminary model used to evaluate and refine a products design and functionality before mass production. It helps designers and developers gather feedback, identify flaws, and make necessary adjustments, ultimately ensuring the final product meets customer expectations and market demands with precision and efficiency.',
			icon: Pp,
		},
		{
			title: 'Product Weir-frame ',
			desc: 'A Product Wireframe is a visual blueprint outlining the layout and structure of a digital product, such as a website or mobile app. It depicts essential elements, like navigation, content placement, and user interface components, guiding development teams in creating intuitive and user-friendly experiences while facilitating efficient communication and collaboration.',
			icon: Pw,
		},
		{
			title: 'Product Design',
			desc: 'Product design encompasses the process of creating tangible or digital goods that meet user needs and market demands. It integrates aesthetics, functionality, and usability, balancing form and function to deliver innovative solutions. Through research, prototyping, and iteration, product designers aim to enhance user experiences and drive business success.',
			icon: Pdesign,
		},
		{
			title: 'Product Development',
			desc: 'Product development involves the end-to-end process of conceptualizing, designing, and bringing a product to market. It encompasses research, prototyping, testing, and refinement stages, culminating in production and launch. This iterative approach aims to create offerings that meet consumer needs, differentiate from competitors, and align with business objectives for sustained success.',
			icon: Pd,
		},
		{
			title: 'SEO Organic Growth',
			desc: 'SEO Organic Growth refers to the sustainable increase in website visibility and traffic achieved through non-paid methods. It involves optimizing content, improving site structure, earning backlinks, and enhancing user experience to rank higher in search engine results. Organic growth signifies long-term success, driven by valuable, relevant content and user-focused strategies.',
			icon: SOG,
		},
		{
			title: 'SMO and Paid Ads',
			desc: 'SMO and Paid Ads involve leveraging social media optimization (SMO) techniques and paid advertising campaigns to enhance brand visibility and drive targeted traffic. SMO focuses on organic engagement and community building on social platforms, while paid ads involve strategically investing in advertisements to reach specific audiences and achieve marketing objectives effectively.',
			icon: Sap,
		},
		{
			title: 'Leadership & Mentoring',
			desc: 'Leadership & Mentoring involves guiding and empowering individuals to achieve their full potential. Leaders inspire, motivate, and provide direction, while mentors offer guidance, support, and knowledge transfer based on experience. Together, they foster personal and professional growth, driving success and cultivating a culture of continuous learning and development.',
			icon: LaM,
		},
	];
	return (
		<>
			<div
				className='AboutSectionStack'
				style={{ padding: '80px 0px 40px 0px' }}
			>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-12 col-sm-12 stack_heading_section_col'>
							<div>
								<h1
									className='Topheading'
									style={{
										color: '#000',
										textAlign: 'center',
										maxWidth: '770px',
										margin: 'auto auto 50px auto',
										justifyContent: 'center',
										textDecoration: 'underline',
									}}
								>
									Specialize Skills
								</h1>
							</div>
							<div className='stack_heading_section stack_grid'>
								{stackdata &&
									stackdata.map((item, id) => {
										return (
											<div
												className='heading_section'
												key={id}
												style={{ padding: '10px' }}
											>
												{item.title && (
													<h2 style={{ display: 'flex', textAlign: 'center' }}>
														{/* <AiFillRightCircle
														size={40}
														style={{ paddingRight: '7px' }}
													/> */}
														<Image
															src={item.icon}
															alt={item.title}
															width={50}
															height={50}
														></Image>
														<span
															style={{
																textAlign: 'left',
																paddingTop: '10px',
																paddingLeft: '12px',
															}}
														>
															{item.title}
														</span>
													</h2>
												)}
												{item.desc && <p>{item.desc}</p>}
												<hr
													style={{
														border: '1.5px solid #000',
														color: '#000',
														backgroundColor: '#000',
														opacity: 1,
													}}
												></hr>
											</div>
										);
									})}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className='AboutSectionStack'
				style={{ padding: '20px 0px 80px 0px' }}
			>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-12 col-sm-12 stack_heading_section_col'>
							<div>
								<h1
									className='Topheading'
									style={{
										color: '#000',
										textAlign: 'center',
										maxWidth: '770px',
										margin: 'auto auto 50px auto',
										justifyContent: 'center',
										textDecoration: 'underline',
									}}
								>
									What I Do?
								</h1>
							</div>
							<div className='stack_heading_section stack_grid'>
								{pmData &&
									pmData.map((item, id) => {
										return (
											<div
												className='heading_section'
												key={id}
												style={{ padding: '10px' }}
											>
												{item.title && (
													<h2 style={{ display: 'flex', textAlign: 'center' }}>
														{/* <AiFillRightCircle
														size={40}
														style={{ paddingRight: '7px' }}
													/> */}
														<Image
															src={item.icon}
															alt={item.title}
															width={50}
															height={50}
														></Image>
														<span
															style={{
																textAlign: 'left',
																paddingTop: '10px',
																paddingLeft: '12px',
															}}
														>
															{item.title}
														</span>
													</h2>
												)}
												{item.desc && <p>{item.desc}</p>}
												<hr
													style={{
														border: '1.5px solid #000',
														color: '#000',
														backgroundColor: '#000',
														opacity: 1,
													}}
												></hr>
											</div>
										);
									})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutSectionStack;
