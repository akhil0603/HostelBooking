import Modal from 'react-bootstrap/Modal'

import cancel from './cancel.PNG'
import './CenterModal.css';
const CenterModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogAs={"modal"}
    >
      <div className="row" style={{width:"1700px",marginTop:"140px"}}>

        <div className="flex4 col-md-4">
          <div className="img"><img src={cancel} onClick={props.onHide} /></div>
          <div className="flex5">
            <h2>Success</h2>
            <div className="line2">
              <h3>Your room is has been booked</h3>
              <h3>successfully.</h3>
            </div>
            <h4 className="line3">Your room details are as follows:</h4>
            <div className="line4">
              <h5>Hostel No.<span>{props.HostelNo}</span></h5>
              <h5>Room No.<span>{props.RoomNo}</span></h5>
              <h5>Floor No.<span>{props.floorNo}</span></h5>
            </div>
          </div>
        </div>

      </div>

    </Modal>
  )
}

export default CenterModal;