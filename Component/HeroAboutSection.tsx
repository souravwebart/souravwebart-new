/** @format */

import React from 'react';

function HeroAboutSection() {
	return (
		<div
			className='hero-about-section'
			style={{ minHeight: '200px', padding: '50px 0px' }}
		>
			<div className='container'>
				<div className='hero_about_section_heading' style={{ display: 'flex' }}>
					<h1>Hi!</h1>
					<h2>I am Sourav Gupta</h2>
				</div>
				<div className='hero_about_section_description'>
					<p>
						I am a full-stack web developer, Wordpress Developer and Search
						Engine Optimization (SEO) specialist, UI/UX design. Feel free to
						take a look at my latest projects on the web portfolio page.
					</p>
				</div>
			</div>
		</div>
	);
}

export default HeroAboutSection;
