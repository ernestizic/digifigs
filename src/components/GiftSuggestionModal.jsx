import React from 'react';
import CloseIcon from '../assets/icons/button-close.svg';
import Logo from '../assets/images/logo.svg';
import { giftSuggestions } from '../data';

const GiftSuggestionModal = ({ setGiftSuggestionModal, setFieldValue, values, arrayHelpers }) => {
	const addToWishList =(item)=> {
		const lastWishField = values.wishes[values.wishes.length - 1]
		if([lastWishField.wishName, lastWishField.price, lastWishField.url].includes("")) {
			setFieldValue(`wishes[0].wishName`, item.title)
			setFieldValue(`wishes[0].price`, item.price)
			setFieldValue(`wishes[0].url`, item.url)
			setFieldValue(`wishes[0].photo`, item.image)
		} else {
			arrayHelpers.push({
				wishName: item.title,
				price: item.price,
				url: item.url,
				photo: item.image
			})
		}
	}

	// const removeFromWishList =(item)=> {

	// }

	return (
		<div className='gift_suggestion_modal_bg'>
			<div className='gift_suggestion_modal'>
				<button
					className='close-btn'
					onClick={() => setGiftSuggestionModal(false)}
				>
					<img src={CloseIcon} alt='close' />
				</button>

				<header className='gift-suggestion-header'>
					<img src={Logo} alt='logo' height='50px' width='auto' />
					<h2>Gift Suggestions</h2>
				</header>

				<div className='item-list'>
                    {giftSuggestions?.map(item => (
                        <div className='gift-item' key={item.id}>
                            <div className='item-container'>
                                <img src={item.image} alt='gift item' width='50px' height='auto' />
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>NGN {item.price}</p>
                                </div>
                            </div>
                            <button type='button' onClick={()=> addToWishList(item)}>Add</button>
                        </div>
                    ))}
				</div>
				<div className='action-container'>
					<button type='button' className='cancel'>Cancel</button>
					<button type='button' className='done' onClick={() => setGiftSuggestionModal(false)}>Done</button>
				</div>
			</div>
		</div>
	);
};

export default GiftSuggestionModal;
