import React, { useState } from 'react';
import CloseIcon from '../assets/icons/button-close.svg';
import Logo from '../assets/images/logo.svg';
import { giftSuggestions } from '../data';

const GiftSuggestionModal = ({
	setGiftSuggestionModal,
	setFieldValue,
	values,
	arrayHelpers,
}) => {
	const [suggestion, setSuggestion] = useState(giftSuggestions);

	// function to add suggestion
	const selectSuggestion = (suggestion) => {
		const lastWishField = values.wishes[values.wishes.length - 1]
		if([lastWishField.wishName, lastWishField.price, lastWishField.url].includes("")) {
			setFieldValue(`wishes[0].wishName`, suggestion.title)
			setFieldValue(`wishes[0].price`, suggestion.price)
			setFieldValue(`wishes[0].url`, suggestion.url)
			setFieldValue(`wishes[0].photo`, suggestion.image)
		} else {
			arrayHelpers.push({
				wishName: suggestion.title,
				price: suggestion.price,
				url: suggestion.url,
				photo: suggestion.image,
			});
		}
		setSuggestion(
			giftSuggestions.map((item) => {
				if (item.id === suggestion.id) {
					item.selected = !item.selected;
				}
				return item;
			})
		);
	};

	// Remove suggestion
	const removeSuggestion = (idx, suggestion) => {
		arrayHelpers.remove(idx)
		setSuggestion(
			giftSuggestions.map((item) => {
				if (item.id === suggestion.id) {
					item.selected = !item.selected;
				}
				return item;
			})
		);
	};

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
					{suggestion?.map((item, idx) => (
						<div className='gift-item' key={item.id}>
							<div className='item-container'>
								<img
									src={item.image}
									alt='gift item'
									width='50px'
									height='auto'
								/>
								<div>
									<h4>{item.title}</h4>
									<p>NGN {item.price}</p>
								</div>
							</div>
							{item.selected ? (
								<button 
									type='button' 
									onClick={() => removeSuggestion(idx, item)}
									style={{border: '1px solid #9f2424', color: '#9f2424'}}
								>
									Remove
								</button>
							): (
								<button 
									type='button' 
									onClick={() => selectSuggestion(item)} 
								>
									Add
								</button>
							)}
						</div>
					))}
				</div>
				<div className='action-container'>
					<button type='button' className='cancel'>
						Cancel
					</button>
					<button
						type='button'
						className='done'
						onClick={() => setGiftSuggestionModal(false)}
					>
						Done
					</button>
				</div>
			</div>
		</div>
	);
};

export default GiftSuggestionModal;
