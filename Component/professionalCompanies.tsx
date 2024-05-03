/** @format */

import React from 'react';
import Image from 'next/image';
import Slider from './SubComponent/slider';
import CompanyList from './Data/companyList';
import { useRouter } from 'next/router';

function ProfessionalCompanies() {
	const router = useRouter();
	return (
		<div
			className='professionCompanySection'
			style={{
				padding: '80px 0px',
				textAlign: 'center',
				backgroundColor: router.pathname === '/about' ? '#412678' : '#F2F7FA',
			}}
		>
			<div className='container'>
				<div
					className='professional_section_heading'
					style={{ marginBottom: '45px' }}
				>
					<h2
						style={{ color: router.pathname === '/about' ? '#fff' : '#2e216' }}
					>
						Professional Experience Companies{' '}
					</h2>
					<p
						style={{
							color:
								router.pathname === '/about'
									? 'rgb(224 185 244)'
									: 'rgb(90, 90, 90)',
						}}
					>
						I have worked for below mentioned Amaizing companies.
					</p>
				</div>
				<div className='professional_section_logo'>
					<Slider CompanyList={CompanyList} />
				</div>
			</div>
		</div>
	);
}

export default ProfessionalCompanies;
