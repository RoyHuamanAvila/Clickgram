import React from 'react';
import './BrandRAD.scss';

export type BrandRADProps = {
}

const BrandRAD: React.FC<BrandRADProps> = () => {
	return (
		<div className='brand-container'>
			<img src="/RoyAndresDev.webp" alt="brand icon" />
		</div>
	);
};

export default BrandRAD;
