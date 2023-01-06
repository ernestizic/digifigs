// Create wish modal screen
import React from 'react'
import CloseIcon from '../assets/icons/button-close.svg'
import CreateWishlistForm from '../components/CreateWishlistForm'
import Logo from '../assets/images/logo.svg'
const CreateWishlistScreen = () => {
  return (
    <div className='wish-form-container'>
        <button className='close-btn' onClick={()=> alert("Can't close as this is the default screen")}>
          <img src={CloseIcon} alt='close' />
        </button>

        <header className='wishlist-header'>
          <img src={Logo} alt='logo' height='50px' width='auto' />
          <p>New wish list</p>
          <h2>Create a wish list</h2>
        </header>
        <CreateWishlistForm />
    </div>
  )
}

export default CreateWishlistScreen