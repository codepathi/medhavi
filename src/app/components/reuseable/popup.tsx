"use client"

import Modal from 'react-bootstrap/Modal';
import dynamic from "next/dynamic";
import 'bootstrap/dist/css/bootstrap.min.css';
import DownloadPdf from './downloadPdf';
import '../../styles/popup.css';

function Popup(props : any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Student submission
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modalTop">
          <div className="userContainerLeft">
              <img src={props?.userDataPopup?.profile} alt={props?.userDataPopup?.name} />
              <div className="userDetail">
                  <span>{props?.userDataPopup?.name}</span>
                  <span className='text-sm text-gray-400'>{props?.userDataPopup?.dob}</span>
                  <span>{props?.userDataPopup?.submission}</span>
              </div>
              </div>
        </div>
        <div className="downloadPdfSection">
         <span className="text-sm text-gray-400 mt-2"> Submitted files </span>
         <div className="flex">
        <DownloadPdf />
        <DownloadPdf />
        </div>
        </div>
        <div className="paragraph mt-4">
          <span className="text-sm text-gray-400">Student comment</span>
          <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod blanditiis quae. Voluptatem, placeat distinctio? Nostrum nihil veritatis dolor dolorum repellat ratione voluptate, commodi totam unde natus. Nostrum nihil veritatis dolor dolorum repellat ratione voluptate, commodi totam unde natus.</p>
        </div>
        <div className="gradeObtained flex flex-col">
          <span className="text-sm text-gray-400">Grade Obtained</span>
          <div className='flex'>
            {props?.userDataPopup?.grade ? <><input value={props?.userDataPopup?.grade} type="number" className="gradeInput gradeInputLarge"/></> 
            : 
            (<>
            <input placeholder='Enter grade here' type="number" className="gradeInput"/>
            </>)}
          
          <span className='outOfBtn'>out of 10</span>
          </div>
        </div>
        <div className="textBox mt-4">
          {props?.userDataPopup?.gradeInfo ?
           <p className="text-sm text-gray-800 bg-gray-200 rounded p-2">{props?.userDataPopup?.gradeInfo}</p> :
           (<textarea name="text" className='inputText ' id="asdf" placeholder='Enter your question here'/>)}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="text-red-500 text-sm" onClick={props.onHide}>Ask for resubmission</button>
          <button className="button gradeBtn selected" style={{marginLeft: "20px"}}> {props?.userDataPopup?.grade ? "Edit Grade" : "Grade"} </button>
      </Modal.Footer>
    </Modal>
  );
}

export default dynamic (() => Promise.resolve(Popup), {ssr: false})
