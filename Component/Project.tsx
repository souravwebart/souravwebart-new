/** @format */

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import ProjectCard from './ProjectCard';

interface Props {
	data: any;
}

function Project(Props: Props) {
	const { data } = Props;
	console.log('data', data);

	const [visible, setVisible] = useState(8);
	const showMoreWorks = () => {
		setVisible((prevValue) => prevValue + 4);
	};

	const [filterLanguage, setFilterLanguage] = useState<any>([]);
	const [finalFilterLanguage, setFinalFilterLanguage] = useState(data);
	const [active, setActive] = useState('All');

	useEffect(() => {
		const res = Object.values(
			data.reduce(
				(
					a: { [x: string]: { language: any; id: any } },
					{ language, id }: any
				) => {
					a[language] = { language, id };
					return a;
				},
				{}
			)
		);

		setFilterLanguage(res);
	}, []);

	console.log('filterLanguage', filterLanguage);

	const handleClick = (idx: number) => {
		const langugeType = data.filter((x: { language: number }) => {
			return x.language === idx;
		});
		filterLanguage.filter((x: { language: any }) => {
			return x.language === idx && setActive(x.language);
		});
		setFinalFilterLanguage(langugeType);
	};

	const handleAllClick = () => {
		setFinalFilterLanguage(data);
		setActive('All');
	};

	return (
		<div
			className='project_section'
			style={{
				padding: '120px 0px 80px 0px',
				background:
					'linear-gradient(rgb(193 233 248) 46%, rgb(255, 255, 255) 100%)',
			}}
		>
			<div className='container'>
				<div className='project_container'>
					<h1>Web Development, UI/UX Design and PM Project</h1>
					<p>
						My tasks utilize an immense assortment of most recent innovation
						Tools. My best experiences are to make NodeJS Backend Projects, PHP
						backend projects, WordPress Development projects, and React
						Projects, UI/UX design using Figma. The following are a portion of
						my tasks. Note that not the entire portion of the referenced
						undertakings are on GitHub yet.
					</p>
				</div>
				<ProjectCard />
				<div className='project_filter' style={{ marginTop: '100px' }}>
					<ul>
						<li
							onClick={handleAllClick}
							style={{
								backgroundColor:
									active === 'All' ? 'rgba(245, 110, 40, 1)' : '#ace0f8ab',
								color: active === 'All' ? '#fff' : 'rgb(38, 4, 64)',
							}}
						>
							All
						</li>
						{filterLanguage.map((item: any, idx: number) => {
							return (
								item.language && (
									<li
										key={idx}
										style={{
											backgroundColor:
												active === item.language
													? 'rgba(245, 110, 40, 1)'
													: '#ace0f8ab',
											color:
												active === item.language ? '#fff' : 'rgb(38, 4, 64)',
										}}
									>
										<a onClick={() => handleClick(item.language)}>
											{item.language && item.language}
										</a>
									</li>
								)
							);
						})}
					</ul>
				</div>
				<div
					className='project_container_section'
					style={{ padding: '40px 0px' }}
				>
					{finalFilterLanguage &&
						finalFilterLanguage.slice(0, visible).map((x: any, idx: number) => {
							return (
								<Link href={x.html_url} key={idx}>
									<div
										className='project_card'
										style={{
											backgroundColor: '#fff',
											padding: '15px',
											borderRadius: '15px',
											margin: '15px',
											cursor: 'pointer',
										}}
									>
										{x && x.name && <h1>Title : {x.name}</h1>}

										{x && x.language && (
											<h3
												style={{
													backgroundColor:
														x.language === 'HTML'
															? 'rgb(197 255 175)'
															: '#c3d5fa' && x.language === 'CSS'
															? '#f0c1f0'
															: '#c3d5fa' && x.language === 'PHP'
															? 'rgb(180 181 238)'
															: '#c3d5fa' && x.language === 'JavaScript'
															? 'rgb(252 248 202)'
															: '#c3d5fa',
												}}
											>
												{x.language}
											</h3>
										)}

										{x && x.created_at && (
											<p>
												Publish Date :{' '}
												<b>{new Date(x.created_at).toLocaleDateString()}</b>
											</p>
										)}

										<h4>
											View in details <BsArrowRightCircle size={15} />
										</h4>
									</div>
								</Link>
							);
						})}
				</div>
				<div className='loadmorebutton'>
					<button
						style={{
							display: visible >= data.length ? 'none' : 'hidden',
						}}
						className='loadmorebtn'
						onClick={showMoreWorks}
					>
						Load More
					</button>
				</div>
			</div>
		</div>
	);
}

export default Project;
