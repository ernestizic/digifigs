// Create wish modal screen
import React from 'react'
import CloseIcon from '../assets/icons/button-close.svg'
import CreateWishlistForm from '../components/CreateWishlistForm'
import Logo from '../assets/images/logo.svg'
import TrashIcon from '../assets/icons/trash.svg'
import ShareIcon from '../assets/icons/send-2.svg'
import { useNavigate } from 'react-router-dom'
const CreateWishlistScreen = () => {
  const navigate = useNavigate()
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

        <div className="action-container">
          <button className='delete-list'>
            <img src={TrashIcon} alt='trash' />
            Delete
          </button>
          {/* Navigate to no access screen when share list button is clicked */}
          <button className='share-list' onClick={()=> navigate('/no-access')}>
            <img src={ShareIcon} alt='share' />
            Share
          </button>
        </div>
    </div>
  )
}

export default CreateWishlistScreen