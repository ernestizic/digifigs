// WELCOME SCREEN
// Show this screen after a user has signed up
import React, { useEffect } from 'react';
import Logo from '../assets/images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// Navigate to Userdashboard after 3 seconds of showing this screen
		setTimeout(() => {
			navigate('/user-dashboard');
		}, 3000);
		// eslint-disable-next-line
	}, []);

	return (
		<div className='welcome-screen'>
			<button className='back-btn' onClick={() => navigate('/')}>
				Go back to site
			</button>

			<div>
				<img src={Logo} alt='logo' height='50px' width='auto' />
				<h1>Hello Shalom! Welcome to Giftly</h1>
				<p>
					To continue using Giftly, head over to your inbox and click on the
					verification link we just sent you.
				</p>

				<Link>Resend email</Link>
			</div>
		</div>
	);
};

export default WelcomeScreen;
