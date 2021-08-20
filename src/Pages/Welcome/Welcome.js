
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectUser } from "../../actions";
import './Welcome.css';
import db from '../../firebase';
import { useHistory } from "react-router-dom";
const Welcome = (props) => {
  let history = useHistory()
  useEffect(() => {
    if (props.booked == null) {
      history.push('./selectHostel')
    }
  })
  return (
    <>
      <div className="main">
        <h1>Welcome {props?.user?.displayName}</h1>
        <div className="paragraph">
          <h4>You have already booked a room</h4>
          <h3>Your room details are as follows:</h3>

          <h4>Hostel No.  <span>{props?.booked?.HostelNo}</span></h4>
          <h4>Room no. <span>{props?.booked?.RoomNo}</span></h4>
          <h4>Floor <span>{props?.booked?.floorNo}</span></h4>
        </div>

      </div>
    </>


  )
}

const mapStateToProps = (state) => {

  return {
    user: state.selectedUser,
    booked: state.booked,
  }
}

export default connect(mapStateToProps, { selectUser })(Welcome);