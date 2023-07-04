"use client"
import linksArr from "../../dummyData/navLinks"
import linksArrBottom from "../../dummyData/navLinksBottom"
import '../../styles/leftNav.css'
import { useState } from "react"

const LeftNav = () => {
    
    // setSelectedItem required in navigation
    const [selectedItem, setSelectedItem] = useState<number>(2)
    return ( 
    <div className="leftNav">
        <img src="/images/logo.png" className="mainLogo" alt="Logo" />
        <div className="sideNavLinks">
        {linksArr.map((link)=>{
            return(
            <div key = {link.id} className= {`indvLink ${selectedItem === link.id ? "selected" : ""}`} > <img src={`/images/leftNav/${link.icon}`} alt={link.name} /> <span> {link.name}  {link?.notification ? <span className="notifications">{link.notification}</span> : ''} </span>
            {link?.children ? <span className="childrenExpand">&gt;</span> : ''}
            </div>
            )
        })}
        </div>
        <div className="sideNavLinks" style={{marginTop: '5vh'}}>
        {linksArrBottom.map((link)=>{
            return(
            <div key = {link.id} className= {`indvLink`} > <img src={`/images/leftNav/${link.icon}`} alt={link.name} /> <span> {link.name} {link?.notification ? <span className="notifications">{link.notification}</span> : ''}</span>
            </div>
            )
        })}
        </div>
    </div>
    );
}
 
export default LeftNav;