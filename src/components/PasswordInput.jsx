// Password input component
import React, { useState } from 'react';
import { TextField } from '@mui/material';

const PasswordInput = ({
	values,
	errors,
	helperText,
	handleBlur,
	handleChange,
	name,
	id,
	label,
}) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className='password-input-box'>
			<TextField
				type={showPassword ? 'text' : 'password'}
				id={id}
				label={label}
				variant='filled'
				fullWidth
				name={name}
				value={values}
				onChange={handleChange}
				onBlur={handleBlur}
				error={errors}
				helperText={helperText}
				InputLabelProps={{
					style: { color: '#000' },
				}}
				InputProps={{ disableUnderline: true }}
				sx={{ mt: '20px' }}
			/>
			{showPassword ? (
				<i
					className='fa-solid fa-eye-slash'
					onClick={() => setShowPassword((prev) => !prev)}
				></i>
			) : (
				<i
					className='fa-solid fa-eye'
					onClick={() => setShowPassword((prev) => !prev)}
				></i>
			)}
		</div>
	);
};

export default PasswordInput;
