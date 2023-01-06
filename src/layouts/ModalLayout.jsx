import React from 'react';
import Logo from '../assets/images/logo.svg'

const ModalLayout = ({ children, title, description }) => {
	return (
        <div className='backdrop'>
            <div className='modal-layout'>
                <header className='modal-header'>
                    <img src={Logo} alt='logo' height='50px' width='auto' />
                    <h2>{title}</h2>
                    <p>{description}</p>
                </header>
                {children}
            </div>
        </div>
	);
};

export default ModalLayout;
