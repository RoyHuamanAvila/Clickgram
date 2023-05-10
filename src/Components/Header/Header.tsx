import React from 'react';
import './Header.scss';

export type HeaderProps = {
}

const Header: React.FC<HeaderProps> = () => {
	return (
		<header className='header'>
			<img className='header-logo' src="/Logo.svg" alt="Header logo" />
		</header>
	);
};

export default Header;
