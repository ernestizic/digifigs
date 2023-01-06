import React, { useState, useRef, useEffect } from 'react';
import { TextField } from '@mui/material';
import { Formik, Form, FieldArray } from 'formik';
import GiftSuggestionModal from './GiftSuggestionModal';
import Maximize from '../assets/icons/maximize-icon.svg';
import Minimize from '../assets/icons/minimize-icon.svg';
import GiftIcon from '../assets/icons/gift.svg';

// Wish detail form fields component
const FormFields = ({ wish, onChange, index, setFieldValue }) => {
	const [contentHeight, setContentHeight] = useState('0px');
	const [showContent, setShowContent] = useState(false);

	const contentRef = useRef(null);

	useEffect(() => {
		setContentHeight(
			showContent ? contentRef.current.scrollHeight + 'px' : '0px'
		);
	}, [showContent]);

	return (
		<div className='wish-detail-form'>
			{wish.photo && (
				<div className='gift-image-container'>
					<img src={wish.photo} alt='' width='45px' height='45px' />
					<button
						type='button'
						onClick={() => setFieldValue(`wishes[${index}].photo`, '')}
					>
						x
					</button>
				</div>
			)}
			<button
				type='button'
				onClick={() => setShowContent((prev) => !prev)}
				className='field-toggler'
			>
				<img src={showContent ? Minimize : Maximize} alt='maximize field' />
			</button>
			<div className='wishes-and-details'>
				<div className='tick-box'></div>

				{/* Wish name input field */}
				<TextField
					id='wish-name'
					label='Wish name'
					variant='filled'
					fullWidth
					name={`wishes[${index}].wishName`}
					value={wish.wishName}
					onChange={onChange}
					InputLabelProps={{
						style: { color: '#000' },
					}}
					sx={{
						'& .MuiInputLabel-root': { padding: '0 25px' },
						'& .MuiFilledInput-input': {
							background: '#f0f0f0',
							textIndent: 25,
						},
						'& .MuiFilledInput-input:hover': {
							background: '#f0f0f0',
						},
						'& .MuiFilledInput-input:focus': {
							background: '#f0f0f0',
						},
					}}
					InputProps={{ disableUnderline: true }}
				/>
				<div className='other-wish-fields'>
					{/* Wish Link input field */}
					<input
						type='url'
						name={`wishes[${index}].url`}
						value={wish.url}
						onChange={onChange}
						placeholder='Purchase link'
					/>

					<div
						className='hidden-fields'
						ref={contentRef}
						style={{ maxHeight: `${contentHeight}` }}
					>
						<div className='price-container'>
							{/* Select currency */}
							<select
								name={`wishes[${index}].currency`}
								onChange={onChange}
								style={{
									background: 'inherit',
									width: '50px',
									height: '30px',
								}}
							>
								<option value='dollar'>$</option>
								<option value='naira'>&#8358; </option>
								<option value='pound'>&#163;</option>
							</select>
							{/* Wish price input field */}
							<input
								type='number'
								name={`wishes[${index}].price`}
								value={wish.price}
								placeholder='Price (optional)'
								onChange={onChange}
							/>
						</div>
						{/* wish quantity input field */}
						<input
							type='number'
							name={`wishes[${index}].quantity`}
							value={wish.quantity}
							placeholder='Quantity'
							onChange={onChange}
						/>

						{/* wish description input field */}
						<input
							type='text'
							name={`wishes[${index}].description`}
							value={wish.description}
							placeholder='Wish description'
							onChange={onChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};


// Wish detail form
// components renders the array of forms
const WishDetailForm = () => {
	const [giftSuggestionModal, setGiftSuggestionModal] = useState(false);
	return (
		<div>
			<Formik
				initialValues={{
					wishes: [
						{
							wishName: '',
							photo: '',
							url: '',
							currency: '',
							price: '',
							description: '',
							quantity: '',
						},
					],
				}}
				onSubmit={(values) =>
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
					}, 500)
				}
			>
				{({ values, handleChange, setFieldValue }) => (
					<Form>
						<FieldArray
							name='wishes'
							render={(arrayHelpers) => (
								<div>
									{values.wishes &&
										values.wishes.map((wish, idx) => (
											<FormFields
												key={idx}
												index={idx}
												wish={wish}
												onChange={handleChange}
												setFieldValue={setFieldValue}
											/>
										))}
									<button
										type='button'
										className='add_another_wish'
										onClick={() => arrayHelpers.push('')}
									>
										+ Add another
									</button>

									<button
										type='button'
										className='generate-gift'
										onClick={() => setGiftSuggestionModal(true)}
									>
										<img src={GiftIcon} alt='gift' />
										Generate gift ideas
									</button>
									{giftSuggestionModal && (
										<GiftSuggestionModal
											setGiftSuggestionModal={setGiftSuggestionModal}
											setFieldValue={setFieldValue}
											values={values}
											arrayHelpers={arrayHelpers}
										/>
									)}
								</div>
							)}
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default WishDetailForm;
