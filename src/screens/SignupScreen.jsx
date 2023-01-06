import React from 'react';
import { TextField } from '@mui/material';
import CloseIcon from '../assets/icons/button-close.svg';
import Logo from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { Formik } from 'formik';
import PasswordInput from '../components/PasswordInput';

const SignupScreen = () => {
	const navigate = useNavigate();

	// Form validation
	let validationSchema = Yup.object().shape({
		firstname: Yup.string().required('Required'),
		lastname: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email address').required('Required'),
		password: Yup.string()
			.min(8, 'Your password must contain at least 8 characters.')
			.required('Please enter password'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Passwords do not match')
			.required('Field cannot be empty'),
	});

	return (
		<div className='signup-screen'>
			<button type='button' className='close-btn' onClick={() => navigate(-1)}>
				<img src={CloseIcon} alt='close' />
			</button>

			<header className='signup-form-header'>
				<img src={Logo} alt='logo' height='50px' width='auto' />
				<h2>Sign up</h2>
				<p>You're just a few clicks away from creating your wish list</p>
			</header>

			<Formik
				initialValues={{
					firstname: '',
					lastname: '',
					email: '',
					password: '',
					confirmPassword: '',
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert('Welcome');
						setSubmitting(false);
					}, 400);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isValid,
					dirty,
				}) => (
					<form onSubmit={handleSubmit}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								gap: 30,
								marginTop: '20px',
							}}
						>
							{/* First name text field */}
							<TextField
								id='firstname'
								label='First name'
								variant='filled'
								name='firstname'
								value={values.firstname}
								onChange={handleChange}
								onBlur={handleBlur}
								error={errors.firstname && touched.firstname ? true : false}
								helperText={
									errors.firstname && touched.firstname && errors.firstname
								}
								InputLabelProps={{
									style: { color: '#000' },
								}}
								InputProps={{ disableUnderline: true }}
							/>

							{/* Last name text field */}
							<TextField
								id='lastname'
								label='Last name'
								variant='filled'
								name='lastname'
								error={errors.lastname && touched.lastname ? true : false}
								helperText={
									errors.lastname && touched.lastname && errors.lastname
								}
								value={values.lastname}
								onChange={handleChange}
								onBlur={handleBlur}
								InputLabelProps={{
									style: { color: '#000' },
								}}
								InputProps={{ disableUnderline: true }}
							/>
						</div>

						{/* Email text field */}
						<TextField
							id='email'
							label='Email address'
							name='email'
							variant='filled'
							error={errors.email && touched.email ? true : false}
							helperText={errors.email && touched.email && errors.email}
							fullWidth
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							InputLabelProps={{
								style: { color: '#000' },
							}}
							InputProps={{ disableUnderline: true }}
							sx={{ mt: '20px' }}
						/>

						{/* password input field */}
                        <PasswordInput 
                            values={values.password} 
                            errors={errors.password && touched.password ? true : false} 
                            helperText={errors.password && touched.password && errors.password}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            name="password"
                            id='password'
                            label='Password'
                        />

						{/* confirm password input field */}
                        <PasswordInput 
                            values={values.confirmPassword} 
                            errors={errors.confirmPassword && touched.confirmPassword ? true : false} 
                            helperText={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            name="confirmPassword"
                            id='confirm-password'
                            label='Confirm password'
                        />

						<button
							type='submit'
							className='submit'
							disabled={!(isValid && dirty)}
							onClick={() => navigate('/welcome')}
						>
							Sign up
						</button>
					</form>
				)}
			</Formik>

			<p className='signup-terms'>
				By signing up on Giftly, you agree to our Policy and Terms of Service
			</p>

			<p>
				Already have an account? <b>Sign In</b>
			</p>
		</div>
	);
};

export default SignupScreen;
