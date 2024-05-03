/** @format */

import React from 'react';
import dynamic from 'next/dynamic';
const Animator = dynamic(
	import('react-scroll-motion').then((it) => it.Animator),
	{ ssr: false }
);

import {
	ScrollContainer,
	ScrollPage,
	batch,
	Fade,
	FadeIn,
	FadeOut,
	Move,
	MoveIn,
	MoveOut,
	Sticky,
	StickyIn,
	StickyOut,
	Zoom,
	ZoomIn,
	ZoomOut,
} from 'react-scroll-motion';
import { fadeInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Image from 'next/image';
import Rocket1 from './Image/globe.png';
import Rocket2 from '../public/Image/sourav gupta (2).png';
import Link from 'next/link';

function HomeComponent() {
	const styles = {
		fadeinleft: {
			animation: 'x 1s',
			animationName: Radium.keyframes(fadeInLeft, 'fadeinleft'),
		},
	};
	return (
		<div
			style={{ minHeight: '95vh', position: 'relative' }}
			className='hometop'
		>
			<div className='container'>
				<div className='row'>
					<div className='col col-12' style={{ margin: 'auto' }}>
						<div style={{ paddingTop: '25vh' }}>
							<StyleRoot>
								<div style={styles.fadeinleft} className='Topheading'>
									<h1>
										Shapping Your <br></br>
										<span className='subtopheading'>digital vission</span>
									</h1>
								</div>
								<div style={{ maxWidth: '570px' }}>
									<p>
										<span
											style={{
												fontFamily: 'DM Sans',
												fontSize: '1.2rem',
												fontWeight: 500,
												lineHeight: '32px',
												color: '#fff',
											}}
										>
											Product management and Delivery / Web App Design &
											Development/ Startup Consultant / Founder / Front-End
											Development Professional / SEO - Organic growth for
											Startups
										</span>
									</p>
								</div>
								<div>
									<Link href='/about'>
										<a
											data-scroll-to='true'
											className='header__hero--cta Gradiant-heading '
										>
											Lets Start to know me
										</a>
									</Link>
								</div>
							</StyleRoot>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{ bottom: 0, right: '20px', position: 'absolute' }}
				className='moving-rocket'
			>
				<Image src={Rocket2} alt='souravwebart' width={300} height={200} />
			</div>
		</div>
	);
}

export default HomeComponent;
