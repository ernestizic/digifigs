import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='dashboard-header'>
        <div>
            <h3>My Wishlists</h3>
        </div>

        <div className='header-action-container'>
            <i className='fa fa-search' />
            <input
                type='search'
                placeholder='Find friends'
            />

            <button>+ Create Wishlist</button>
        </div>
    </div>
  )
}

export default DashboardHeader