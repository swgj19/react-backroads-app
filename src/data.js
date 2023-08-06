import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
	{ id: 1, href: '#home', text: 'home' },
	{ id: 2, href: '#about', text: 'about' },
	{ id: 3, href: '#services', text: 'services' },
	{ id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
	{ id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
	{ id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
	{ id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
	{
		id: 1,
		icon: 'fas fa-wallet fa-fw',
		title: 'saving money',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
	},
	{
		id: 2,
		icon: 'fas fa-tree fa-fw',
		title: 'endless hiking',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid',
	},
	{
		id: 3,
		icon: 'fas fa-socks fa-fw',
		title: 'amazing comfort',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid',
	},
];

export const tours = [
	{
		id: 1,
		image: tour1,
		date: 'august 26th, 2023',
		title: 'Tibet Adventure',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
		location: 'China',
		duration: '6',
		price: '500',
	},
	{
		id: 2,
		image: tour2,
		date: 'august 26th, 2023',
		title: 'Kentucky Adventure',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
		location: 'United States',
		duration: '6',
		price: '500',
	},
	{
		id: 3,
		image: tour3,
		date: 'august 26th, 2023',
		title: 'Surfing Adventure',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
		location: 'Australia',
		duration: '6',
		price: '500',
	},
	{
		id: 4,
		image: tour4,
		date: 'august 26th, 2023',
		title: 'Ice Cold Adventure',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
		location: 'Antartica',
		duration: '6',
		price: '500',
	},
];
