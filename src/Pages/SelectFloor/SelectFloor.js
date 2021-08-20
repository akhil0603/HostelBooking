
import './SelectFloor.css';
import React from 'react'
import { connect } from 'react-redux';
import { selectUser } from "../../actions";
import CenterModal from '../../components/CenterModal';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import db from '../../firebase';
const SelectFloor = (props) => {
  const [floor, setFloor] = React.useState("1st Floor")
  const [room, setRoom] = React.useState(null)
  let { id } = useParams();
  const [modalShow, setModalShow] = React.useState(false);

  const bookRoom = () => {

    db.collection("bookings").add({
      user: props.user.uid,
      RoomNo: room,
      HostelNo: id,
      floorNo: floor
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setModalShow(true)
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  return (
    <div>
      <p>Choose a floor</p>
      <select className="dropdown" value={floor}
        onChange={(e) => { setFloor(e.target.value) }}
      >
        <option value="1st Floor">1st Floor</option>
        <option value="2nd Floor">2nd Floor</option>
        <option value="3rd Floor">3rd Floor</option>
        <option value="4th Floor">4th Floor</option>
        <option value="5th Floor">5th Floor</option>

      </select>
      <div className="btn-table">
        <div className="first-btn">
          <button className={room === 1 ? "btn-selected" : "button"}
            onClick={() => setRoom(1)}
          >1</button>
          <button className={room === 2 ? "btn-selected" : "button"}
            onClick={() => setRoom(2)}
          >2</button>
          <button className={room === 3 ? "btn-selected" : "button"}
            onClick={() => setRoom(3)}
          >3</button>
          <button
            onClick={() => setRoom(4)}
            className={room === 4 ? "btn-selected" : "button"}>4</button>
        </div>
        <div className="btn510">
          <button className={room === 10 ? "btn-selected" : "button"}
            onClick={() => setRoom(10)}
          >10</button>
          <button className={room === 5 ? "btn-selected" : "button"}
            onClick={() => setRoom(5)}
          >5</button>

        </div>

        <div className="last-btn">
          <button className={room === 9 ? "btn-selected" : "button"}
            onClick={() => setRoom(9)}
          >9</button>
          <button className={room === 8 ? "btn-selected" : "button"}
            onClick={() => setRoom(8)}
          >8</button>
          <button className={room === 7 ? "btn-selected" : "button"}
            onClick={() => setRoom(7)}
          >7</button>
          <button className={room === 6 ? "btn-selected" : "button"}
            onClick={() => setRoom(6)}
          >6</button>
        </div>


      </div>
      <div>
        {
          room && <button className="bookroom"

            onClick={() => { bookRoom() }}

          >Book Room</button>
        }

      </div>
      <CenterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        HostelNo={id}
        RoomNo={room}
        floorNo={floor}
      />
    </div>
  )
}
const mapStateToProps = (state) => {

  return {
    user: state.selectedUser
  }
}

export default connect(mapStateToProps, { selectUser })(SelectFloor)