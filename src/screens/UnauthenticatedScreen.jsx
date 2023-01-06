// UNAUTHENTICATED SCREEN
// Show this screen if a user tries to share a wishlist without being signed in
import React from 'react';
import Logo from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom'

const UnauthenticatedScreen = () => {
    const navigate = useNavigate()
	return (
		<div className='unauthenticated-screen'>
			<button className='back-btn' onClick={() => navigate('/')}> Go back to site </button>

			<div>
				<img src={Logo} alt='logo' height='50px' width='auto' />
				<p>
					Hi there! Kindly sign up to continue using Gifltly and share your
					wishlist with your family and friends{' '}
				</p>
				<div className='no-access-action-container'>
					<button className='cancel-button' onClick={()=> navigate(-1)}>
						Cancel
					</button>
					<button className='sign-up-button' onClick={() => navigate('/sign-up')}>
						Sign up
					</button>
				</div>
			</div>
		</div>
	);
};

export default UnauthenticatedScreen;
