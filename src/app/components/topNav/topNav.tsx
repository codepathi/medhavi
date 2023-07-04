import {MdOutlineNotifications} from 'react-icons/md'
import {BiArrowBack} from 'react-icons/bi'
import "../../styles/topNav.css"

const TopNav = () => {
    return ( 
        <nav>
            <div className="leftTopNav">
                <span><BiArrowBack/> <span> Assignment <span className="text-blue-400">/</span> Lorem ipsum dolor </span> </span>
            </div>
            <div className="rightTopNav">
                <div className="notification">
                <MdOutlineNotifications />
                </div>
                <div className="w-8 h-8 rounded-full">
                    <img src="/images/profile.jpg" alt="Profile" className='rounded-full' />
                </div>
            </div>
        </nav>
     );
}
 
export default TopNav;