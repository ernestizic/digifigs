import React, { useState } from 'react';
import WishListImage from '../assets/images/thinking-lady.svg';
import CreateUsernameModal from '../components/dashboardComponents/CreateUsernameModal';
import InterestsModal from '../components/dashboardComponents/InterestsModal';
const MyWishlistScreen = () => {
	const [showUsernameModal, setShowUsernameModal] = useState(true);
	const [showInterestsModal, setShowInterestsModal] = useState(false);
	return (
		<div className='wishlist-screen'>
			<div className='wishlist-screen-content'>
				<img src={WishListImage} alt='wishlist' width='60%' height='auto' />
				<h1>We've never met a list we didn't like</h1>
				<p>
					Your first list doesn't need to be perfect. Just put it out there and
					see if it helps receive the best gifts from your friends.
				</p>

				<button>+ Create Wishlist</button>
			</div>
			{showUsernameModal && (
				<CreateUsernameModal
					setShowUsernameModal={setShowUsernameModal}
					setShowInterestsModal={setShowInterestsModal}
				/>
			)}
			{showInterestsModal && (
				<InterestsModal setShowInterestsModal={setShowInterestsModal} />
			)}
		</div>
	);
};

export default MyWishlistScreen;
