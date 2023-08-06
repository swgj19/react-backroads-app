import React from 'react';
import Title from '../components/Title';
import { services } from '../data';
import Service from '../components/Service';

const Services = () => {
	return (
		<section className='section services' id='services'>
			<Title title='Our Services' subtitle='Our Services' />
			<div className='section-center services-center'>
				{services.map((service) => {
					return <Service key={service.id} {...service} />;
				})}
			</div>
		</section>
	);
};

export default Services;
