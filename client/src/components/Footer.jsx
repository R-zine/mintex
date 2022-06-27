import React from 'react';

const Footer = () => {
	let currentYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<h3 className="footer-text">Copyright &copy; {currentYear} MinteX</h3>
		</footer>
	);
};

export default Footer;
