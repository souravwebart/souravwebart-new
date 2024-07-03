/** @format */

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../Component/Header';
import Footer from '../Component/SubComponent/Footer';
import NextNProgress from 'nextjs-progressbar';
import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script id='gtm-script' strategy='afterInteractive'>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
          page_path: window.location.pathname,
          
![image](https://cdn.sanity.io/images/dgsq0x0m/production/61f24596fb210134e5df6a1dfa285de0f24791cc-1549x601.png?w=450)});
         `}</Script>

			<Head>
				<title>SouravWebArt - FrontEnd Web developer</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<meta name='theme-color' content='#000' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'
					integrity='sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi'
					crossOrigin='anonymous'
				/>
			</Head>
			<Header />
			<NextNProgress color='#A72CF3' />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
