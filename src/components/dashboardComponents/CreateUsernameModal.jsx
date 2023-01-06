import React from 'react';
import ModalLayout from '../../layouts/ModalLayout';
import { TextField } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';


const CreateUsernameModal = ({setShowUsernameModal, setShowInterestsModal}) => {
	// Form validation
	let validationSchema = Yup.object().shape({
		username: Yup.string().required('Required'),
	});

	return (
		<ModalLayout
			title='Create a username'
			description='Create a unique username personalized for yourself on Giftly'
		>
			<Formik
				initialValues={{
					username: '',
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
					<form>
						<TextField
							id='username'
							label='Username'
							variant='filled'
							name='username'
							value={values.username}
							onChange={handleChange}
							onBlur={handleBlur}
							fullWidth
							error={errors.firstname && touched.firstname ? true : false}
							helperText={
								errors.firstname && touched.firstname && errors.firstname
							}
							InputLabelProps={{
								style: { color: '#2E2E3A' },
							}}
							InputProps={{ disableUnderline: true }}
						/>

						<button
							type='button'
							className='user-info-submit-btn'
							disabled={!(isValid && dirty)}
							onClick={() => {
								setShowUsernameModal(false)
								setShowInterestsModal(true)
							}}
						>
							Next step
						</button>
					</form>
				)}
			</Formik>
		</ModalLayout>
	);
};

export default CreateUsernameModal;
