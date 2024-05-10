/** @format */

import React, { useState } from 'react';
import Image from 'next/image';
import Nova from '../public/images/nova.png';
import IIFL from '../public/images/iiflsecurities.png';
import Scale from '../public/images/scalecapital.png';
import Kiosk from '../public/images/kiosk.png';
import Federal from '../public/images/federal.png';
import Foaxmedia from '../public/images/foaxmedia.png';
import Civilworksus from '../public/images/civilworksus.png';
import Detox from '../public/images/detoxtechnologies.png';
import Dreamhouse from '../public/images/dreamhouseincalgary.png';
import Indu from '../public/images/induenterprise.png';
import Domini from '../public/images/domini.png';
import Thumbstackhome from '../public/images/thumbstackhome.png';
import SF from '../public/images/standardfriction.png';
import AEC from '../public/images/aec.png';
import Fx from '../public/images/fxengg.png';
import Oman from '../public/images/oman.png';
import Straell from '../public/images/Sraell.png';
import Plankaroo from '../public/images/plankaroo.png';

function ProjectCard() {
	const [visible1, setvisible1] = useState(6);
	const showMoreWorks = () => {
		setvisible1((prevValue) => prevValue + 4);
	};
	const projectData = [
		{
			title: 'Stream and Sell (Straell)',
			desc: 'Online live video shopping revolutionizes the retail experience, blending convenience with interactive engagement. Shoppers can interact with hosts, ask questions, and make purchases in real-time, mimicking the in-store experience from the comfort of home. This dynamic platform enhances consumer confidence and fosters a sense of community.',
			category: 'UI/UX design',
			screen: Straell,
		},
		{
			title: 'Customize tour Package (Plankaroo)',
			desc: 'Custom tour package booking offers personalized travel experiences tailored to individual preferences. Travelers can design their dream itinerary, selecting destinations, activities, and accommodations according to their interests and budget. With flexibility and attention to detail, custom tour packages ensure unforgettable adventures perfectly suited to every travelers desires.',
			category: 'UI/UX design',
			screen: Plankaroo,
		},
		{
			title: 'Oman Safari Tours',
			desc: 'They promise to offer high-quality tours with their selected & organized experts. Be it off-road tours, camping, or desert trekking in Oman – They have expertise in every field of Oman tourism. Their organization has been developed and managed professionally by individuals with extensive experience in Omans tourism industry.',
			category: 'Web Development',
			screen: Oman,
		},
		{
			title: 'FX Engineering',
			desc: 'Fx Engineering, a premier fire protection, hydrant system, sprinkler system, and tube system company in India. With a steadfast commitment to safeguarding lives and properties, we were incorporated with this noble mission in mind.',
			category: 'Web Development',
			screen: Fx,
		},
		{
			title: 'AEC Electronics',
			desc: 'AEC Electricals & Networks Pvt. Ltd., is your trusted partner for comprehensive electrical and solar solutions. With their headquarters situated in Mumbai and operations extending to Goa and Andhra Pradesh, They stand as a dominant force in the industry, offering reliable and expert services in electrical contracting and design building fields.',
			category: 'Web Development',
			screen: AEC,
		},
		{
			title: 'Standard Friction',
			desc: 'It as in the early seventies that the pace of industrialisation really picked up in India. Industry was striving to maximize production volumes and the focus towards quality had just started to sharpen. The race for the industrial supremacy had just began. Realising the potential of such a fluid situation, Standard Group of Companies commenced their operation in the area of friction materials for all types of automotive and industrial applications.',
			category: 'Web Development',
			screen: SF,
		},
		{
			title: 'Thumbstack Technologies',
			desc: ' At Thumbstack Technologies, we dont just build software, They create experiences. they dont just set goals, They imagine the finish line and work their way backwards. Think of them as your personal GPS for the tech world, they will map out the route and make sure you reach your destination without getting lost in jargon or technicalities. So sit back, relax and let them navigate you to the ultimate user experience"',
			category: 'Web Development',
			screen: Thumbstackhome,
		},
		{
			title: 'Domini cpuppies',
			desc: ' Company that stands strong behind our name and behind the quality of our puppies. We are duly registered with Incorporation CANADA/USA/UK/GERMANY/AUSTRALIA We encourage you to look us up and do your research.',
			category: 'Web Development',
			screen: Domini,
		},
		{
			title: 'Indu Enterprise',
			desc: 'Indu Enterprise is a leading player in Mumbai real estate industry. Everyone dreams to have our own home & we help many of them to make their dreams come true. We build each home painstakingly, with focus on Quality, Useful detailing & ensure Value for money. We desire to earn people’s trust and confidence while we create spacious homes for them.',
			category: 'Web Development',
			screen: Indu,
		},
		{
			title: 'Foax Media',
			desc: 'FoaxMedia is a burgeoning digital agency known for its innovative solutions in web design, SEO, and social media marketing. With a client-centric approach, they craft strategies tailored to individual needs, driving businesses towards online success. FoaxMedia blends creativity with technology to elevate brands in the digital sphere.',
			category: 'Web Development',
			screen: Foaxmedia,
		},
		{
			title: 'Civil works us',
			desc: 'CivilWorks.us is a leading civil engineering firm specializing in infrastructure development and construction projects. Renowned for its expertise in urban planning, transportation, and environmental engineering, CivilWorks.us delivers sustainable solutions that shape communities for the future. Their commitment to excellence ensures resilient, forward-thinking designs for every project.',
			category: 'Web Development',
			screen: Civilworksus,
		},
		{
			title: 'Detox Technologies',
			desc: 'A future where cyber risk is nonexistent. We aim for organizations to master security operations to such an extent that both the likelihood and impact of cyber attacks are minimized to virtually zero. This vision necessitates a paradigm shift – a proactive and anticipatory approach to cybersecurity. Beyond mere response mechanisms, it involves crafting a security culture that preempts threats.',
			category: 'Web Development',
			screen: Detox,
		},
		{
			title: 'Dream House in Calgary',
			desc: 'At Dream Homes Calgary, we bring together years of expertise to guide you through the intricate world of real estate. Our mission is clear: to transform your dream home into a reality. We believe in more than just buying and selling properties; we believe in crafting a lifestyle.',
			category: 'Web Development',
			screen: Dreamhouse,
		},
		{
			title: 'NOVA IIFL Securities',
			desc: 'NOVA IIFL Securities is a leading financial services provider, offering a wide range of investment and trading solutions to clients. Leveraging the expertise of IIFL Securities, it provides access to diversified investment products, robust trading platforms, research insights, and personalized advisory services. NOVA IIFL Securities aims to empower investors with innovative tools and comprehensive support for achieving their financial goals.',
			category: 'Web Development',
			screen: Nova,
		},
		{
			title: 'IIFL Securities (Front-end)',
			desc: 'IIFL Securities is a prominent financial services firm renowned for its comprehensive range of investment solutions. With a customer-centric approach, it offers brokerage services, investment advice, research insights, and robust trading platforms. Leveraging advanced technology and expertise, IIFL Securities aims to empower investors to make informed decisions and achieve their financial objectives effectively.',
			category: 'Web Development',
			screen: IIFL,
		},
		{
			title: 'Scale Capital',
			desc: 'Scale Capital is a dynamic investment firm specializing in scaling technology companies across various sectors. With a strategic focus on growth equity and venture capital, Scale Capital provides capital, expertise, and network access to fuel the expansion and success of promising startups and emerging businesses, driving innovation and value creation.',
			category: 'Web Development',
			screen: Scale,
		},
		{
			title: 'Kiosk EatSure',
			desc: 'Kiosk EatSure is a modern dining solution offering convenient and hygienic self-service kiosks for quick and healthy meals. With a diverse menu of fresh, customizable options, it caters to various dietary preferences. Kiosk EatSure aims to revolutionize the dining experience, combining speed, quality, and convenience for on-the-go customers.',
			category: 'Web Development',
			screen: Kiosk,
		},
		{
			title: 'Federal Bank (Front-End)',
			desc: 'Federal Banks payment gateway is a secure and efficient platform facilitating online transactions for businesses and customers. With advanced encryption technology and multi-layered security features, it ensures safe and seamless payments across various channels. Federal Banks payment gateway enhances convenience and reliability, enabling businesses to expand their online presence with confidence.',
			category: 'Web Development',
			screen: Federal,
		},
	];
	return (
		<>
			<div className='projectCard' style={{ padding: '50px 0px' }}>
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
						My Projects
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
						Something I have built so far
					</h2>
				</div>
				{projectData &&
					projectData.slice(0, visible1).map((item, id) => {
						return (
							<div
								className='project_card_details'
								key={id}
								style={{
									backgroundColor: '#424141',
									margin: '30px 0px',
									borderRadius: '15px',
								}}
							>
								<div
									className='box1'
									style={{ padding: '20px', borderRadius: '15px' }}
								>
									{item && item.screen && (
										<Image
											src={item.screen}
											alt=''
											width={540}
											height={340}
											style={{ borderRadius: '15px' }}
										></Image>
									)}
								</div>
								<div className='box2'>
									{item && item.title && (
										<h1
											style={{
												fontSize: '1.5rem',
												fontFamily: 'DM Sans,sans-serif',
												color: '#fff',
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
												color: '#fff',
												lineHeight: '1.7rem',
												minHeight: '20%',
											}}
										>
											{item.desc}
										</h2>
									)}
									{item && item.category && (
										<p
											style={{
												fontSize: '1rem',
												fontFamily: 'DM Sans,sans-serif',
												color: '#fff',
												lineHeight: '1.9rem',
												fontWeight: '600',
												padding: '20px 0px',
											}}
										>
											<b>Category</b> : {item.category}
										</p>
									)}
								</div>
							</div>
						);
					})}
			</div>
			<div className='loadmorebutton'>
				<button
					style={{
						display: visible1 >= projectData.length ? 'none' : 'hidden',
					}}
					className='loadmorebtn'
					onClick={showMoreWorks}
				>
					Load More
				</button>
			</div>
		</>
	);
}

export default ProjectCard;
