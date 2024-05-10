/** @format */

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import CompanyCard from './companyCard';

interface Props {
	CompanyList: companyInterface[];
}
export interface companyInterface {
	id: number;
	name: string;
	imgURL: string;
	title: string;
}
export default function Slider(Props: Props) {
	const { CompanyList } = Props;
	return (
		<>
			<Swiper
				cssMode={true}
				navigation={true}
				mousewheel={true}
				keyboard={true}
				spaceBetween={10}
				modules={[Navigation, Mousewheel, Keyboard]}
				className='mySwiper'
				id='cardSlider'
				breakpoints={{
					640: {
						slidesPerView: 1.1,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2.2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 4.1,
						spaceBetween: 10,
					},
				}}
			>
				{CompanyList.slice(0)
					.reverse()
					.map((item, idx) => {
						return (
							<SwiperSlide key={idx}>
								<CompanyCard item={item} />
							</SwiperSlide>
						);
					})}
			</Swiper>
		</>
	);
}
