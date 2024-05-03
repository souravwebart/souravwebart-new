/** @format */

import React, { useState } from 'react';
import Image from 'next/image';
import BG from './Image/bg.png';
import { BsFilterRight, BsXLg } from 'react-icons/bs';
import Logo from '../public/Souravwebart.png';
import Link from 'next/link';

function Header() {
	const [show, setShow] = useState(true);

	const openMenu = () => {
		setShow(!show);
	};

	return (
		<div className='main_header'>
			<div className='container'>
				<div
					className='col col-12'
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<div
						style={{
							// top: '20px',
							// left: '20px',
							position: 'relative',
							margin: 'auto 0px',
							display: 'block',
							zIndex: 3,
							cursor: 'pointer',
							verticalAlign: 'middle',
							paddingTop: '20px',
						}}
					>
						<Link href='/'>
							<Image src={Logo} alt='souravwebart' width={150} height={50} />
						</Link>
					</div>
					<div>
						<input type='checkbox' id='active' onClick={openMenu} />
						<label htmlFor='active' className='menu-btn1'>
							{show ? (
								<BsFilterRight className='icon-menu' size={'3rem'} />
							) : (
								false
							)}
						</label>
						<div className='wrapper '>
							<input type='checkbox' id='active' onClick={openMenu} />
							<label htmlFor='active' className='menu-btn'>
								{show ? false : <BsXLg />}
							</label>
							<ul>
								<li>
									<Link href='/'>
										<a className='Gradiant-heading'>Home</a>
									</Link>
								</li>
								<li>
									<Link href='/about'>
										<a className='Gradiant-heading'>About</a>
									</Link>
								</li>
								<li>
									<Link href='/project'>
										<a className='Gradiant-heading'>Projects</a>
									</Link>
								</li>
								<li>
									<a className='Gradiant-heading' href='#'>
										Blog <span>Coming Soon</span>
									</a>
								</li>
								<li>
									<Link href='/contact'>
										<a className='Gradiant-heading'>Lets talk!</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
