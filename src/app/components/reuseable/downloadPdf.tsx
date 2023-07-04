import {HiDownload} from 'react-icons/hi'

const DownloadPdf = () => {
    return ( 
    <div className="downloadPDF">
    <div className="flex gap-4">
    <img src="/images/topBody/ppt.svg" alt="Download PPT" />
    <div className="downloadText">
        <span className='text-md'>Evolution Chapter Note</span>
        <span className="text-gray-400 text-sm">32.5 MB</span>
    </div>
    </div>
    <span><HiDownload/></span>
</div> );
}
 
export default DownloadPdf;