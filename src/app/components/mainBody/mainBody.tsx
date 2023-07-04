"use client"

import {BiSearch} from 'react-icons/bi'
import "../../styles/mainBody.css"
import userData from '../../dummyData/userData';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useState } from 'react';
import Popup from '../reuseable/popup';

const MainBody = () => {
    const [graded, setGraded] = useState<boolean>(false);
    const [showModal, setModalShow] = useState<boolean>(false);
    const [userDataPopup, setUserDataPopup] = useState();

    const buttonClick = (e:any, user:any) => {
        e.preventDefault();
        setModalShow(true)
        setUserDataPopup(user)
    }

    return ( 
        <div className="containers containerMain">
            <div className="selectorTab">
                <div className="buttons mb-4">
                <button className = {!graded ? 'button selected' : 'button'} onClick={() => setGraded(false)}>Not-Graded</button>
                <button className = {graded ? 'button selected' : 'button'} onClick={() => setGraded(true)}>Graded</button>
                </div>
                <div className="search">
                <BiSearch/>
                <input type="text" name="search" className="searchInput" placeholder='Search'/>
                </div>
            </div> 
            <PerfectScrollbar>
            <div className="userGrade">
                
                {graded ? 
                userData.map((user)=>{                     
                    return(  
                    user.grade && <div className="userContainer" key={user.id}>
                    <div className="userContainerLeft">
                    <img src={user.profile} alt={user.name} />
                    <div className="userDetail">
                        <span className='font-medium'>{user.name}</span>
                        <span className='text-sm text-gray-400'>{user.dob}</span>
                        <span className={user?.submission == "Ontime" ? "text-green-400 text-sm" : ("text-red-400 text-sm")}>{user.submission}</span>
                    </div>
                    </div>
                    <div className="userContainerRight">
                    <button onClick={(e) => buttonClick(e, user)} className = {!graded ? 'button gradeBtn selected' : 'button gradedSelected'}>Grade <br /> {graded ? user?.grade || "00"  : (<></>)} </button>
                    
                    </div>
                </div> 
                    
                    )
                     
                }) : (userData.map((user)=>{                     
                    return(     
                        !user.grade && <div className="userContainer" key={user.id}>
                        <div className="userContainerLeft">
                        <img src={user.profile} alt={user.name} />
                        <div className="userDetail">
                            <span className='font-medium'>{user.name}</span>
                            <span className='text-sm text-gray-400'>{user.dob}</span>
                            <span className={user?.submission == "Ontime" ? "text-green-400 text-sm" : ("text-red-400 text-sm")}>{user.submission}</span>
                        </div>
                        </div>
                        <div className="userContainerRight">
                        <button onClick={(e) => buttonClick(e, user)} className = {!graded ? 'button gradeBtn selected' : 'button gradedSelected'}>Grade <br /> {graded ? user?.grade || "00"  : (<></>)} </button>
                        
                        </div>
                    </div>
                    )
                    
                }))}
                
            </div>
            </PerfectScrollbar>
            <Popup show = {showModal} onHide={() => setModalShow(false) } userDataPopup={userDataPopup}/>
        </div>
     );
}
 
export default MainBody;