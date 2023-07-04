import "../../styles/topBody.css"
import DownloadPdf from "../reuseable/downloadPdf";

const TopBody = () => {
    return ( 
        <div className="containerTop containers">
            <div className="upperTopBody">
            <div className="upperBodyTopLeft">
            <img src="/images/topBody/sc.svg" alt="Sc" />
            <div className="flex-col" >
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing</h6>
                <div  className="upperBodyTopLeftMiddle mt-2">
                <span className="mobileHide">Submitted By:</span>
                <img src="/images/topBody/pagination.svg" className="mobileHide" alt="people" />
                <span className="ml-4 mobileHide">Assigned on:</span>
                <span className="text-gray-400 mobileHide">14 Apr 2021 8:43 PM</span>
                </div>
            </div>
            </div>
            <div className="upperBodyTopRight">
            <img src="/images/topBody/days.svg" alt="4 Days" />
            </div>
            </div>
            <p className="text-gray-400 px-4 m-auto text-sm" style={{width: "100%"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis magni nam veritatis voluptatem ipsa culpa, sapiente sint ut beatae consequuntur quod voluptatum consequatur deserunt! sapiente sint ut beatae consequuntur quod voluptatum consequatur deserunt!
            </p>
            <div className="lowerTopBody mt-2 ml-4">
            <DownloadPdf />
            </div>
        </div>
     );
}
 
export default TopBody;
