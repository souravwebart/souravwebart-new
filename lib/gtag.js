// lib/gtag.js
import { ga } from 'react-gtag';

// Initialize Google Analytics
export const GA_TRACKING_ID = 'G-Q2NFKDBZXX'; // Replace with your Google Analytics Measurement ID

export const initGA = () => {
    ga('config', GA_TRACKING_ID);
};
