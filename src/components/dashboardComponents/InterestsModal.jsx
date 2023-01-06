import React, {useState} from 'react';
import { userInterests } from '../../data';
import ModalLayout from '../../layouts/ModalLayout';

const InterestsModal = ({setShowInterestsModal}) => {
    const [interests, setInterests] = useState(userInterests)

    // return selected Interests
    const selectedInterests = interests.filter((item)=> item.selected === true)

    // function to select interest
    const selectInterest =(id)=> {
        setInterests(
            userInterests.map((item) => {
                if (item.id === id) {
                    item.selected = !item.selected;
                }
                return item;
            })
        );
    }
    
	return (
        <div>
            <ModalLayout
                title='What are you into these days?'
                description='Select at least 5 interests to help us personalize your Giftly experience'
            >
                <div className='interests-container'>
                    <div className='interest-list'>
                        {interests?.map(interest => (
                            <div 
                                className={interest.selected ? 'selected-interest' : 'interest'} 
                                key={interest.id} 
                                onClick={()=> selectInterest(interest.id)}
                            >
                                {interest.selected && <i className='fa fa-check' />}
                                <p>{interest.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className='interest-submit-btn-container'>
                        <button 
                            className='user-info-submit-btn' 
                            disabled={selectedInterests.length > 4 ? false : true}
                            onClick={()=> setShowInterestsModal(false)
                        }>
                            Done
                        </button>
                    </div>
                </div>
            </ModalLayout>
        </div>
	);
};

export default InterestsModal;
