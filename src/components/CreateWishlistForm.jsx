// Create wishlist form
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import WishDetailForm from './WishDetailForm';

const CreateWishlistForm = () => {
	const [wishlistName, setWishlistName] = useState('');
	const [description, setDescription] = useState('');

	return (
		<div className='wish-list-form'>
			<header>
				<p>
					<b>List details</b>
				</p>
				<p>Add wishlist name and description.</p>
			</header>

			{/* wishlist name input field */}
			<TextField
				id='wishlist-name'
				label='Wishlist name'
				variant='filled'
				fullWidth
				value={wishlistName}
				onChange={(e) => setWishlistName(e.target.value)}
				InputLabelProps={{
					style: { color: '#000' },
				}}
				InputProps={{ disableUnderline: true }}
				sx={{
					'& .MuiFilledInput-input': {
						border: '1px solid #f0f0f0',
					},
					mt: '20px',
				}}
			/>

			{/* Wishlist description input field */}
			<TextField
				id='description'
				label='Description (optional)'
				variant='filled'
				fullWidth
				value={description}
				InputLabelProps={{
					style: { color: '#000' },
				}}
				onChange={(e) => setDescription(e.target.value)}
				sx={{
					'& .MuiFilledInput-input': {
						border: '1px solid #f0f0f0',
					},
					mt: '20px',
				}}
				InputProps={{ disableUnderline: true }}
			/>

			<header>
				<p>
					<b>Add wishes</b>
				</p>
				<p>Add wishes and other details.</p>
			</header>
			<WishDetailForm />
		</div>
	);
};

export default CreateWishlistForm;
