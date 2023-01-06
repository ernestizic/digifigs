import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg'
import GiftIcon from '../../assets/icons/gift-icon.svg'
import LeaderboardIcon from '../../assets/icons/cup-icon.svg'
import IdeasIcon from '../../assets/icons/discover-icon.svg'
import ArchiveIcon from '../../assets/icons/archive-icon.svg'
import SupportIcon from '../../assets/icons/message-icon.svg'

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='logo-container'>
				<Link to='/'>
					<img src={Logo} alt='Logo' width='35px' height='auto' />
				</Link>
			</div>

            <div className='menu'>
				<ul>
					<li>
						<NavLink to='/user-dashboard'>
							<img src={GiftIcon} alt='My wishlists' />
							Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink to='/leaderboard'>
							<img src={LeaderboardIcon} alt='My wishlists' />
							Leaderboard
						</NavLink>
					</li>
					<li>
						<NavLink to='/gift-ideas'>
							<img src={IdeasIcon} alt='My wishlists' />
							Gift Ideas
                            <div className='new-card'>New</div>
						</NavLink>
					</li>
					<li>
						<NavLink to='/archive'>
							<img src={ArchiveIcon} alt='My wishlists' />
							Archive
						</NavLink>
					</li>
					<li>
						<NavLink to='/support'>
							<img src={SupportIcon} alt='My wishlists' />
							Support
						</NavLink>
					</li>
				</ul>
			</div>

            <div className='sidebar-username-container'>
                <div className='user-image'>
                    <p>SE</p>
                </div>
                <p className='username'>Soham Edwards</p>
                <i className='fa fa-angle-down'/>
            </div>
		</div>
	);
};

export default Sidebar;
