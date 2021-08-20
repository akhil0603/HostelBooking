
import { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { selectUser } from '../actions';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { auth, google, fb } from '../firebase'
// Configure Firebase.
// const config = {
//   apiKey: "AIzaSyA-1yjN-SZOBOaL1RR_TYZoqRJcxqAnk-0",
//   authDomain: "hostelbooking-14dde.firebaseapp.com",
//   projectId: "hostelbooking-14dde",
//   storageBucket: "hostelbooking-14dde.appspot.com",
//   messagingSenderId: "740993244488",
//   appId: "1:740993244488:web:90095b285b497c7edee77d",
//   measurementId: "G-2XL8LNEX4E"
// };
// firebase.initializeApp(config);
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/welcome',
  signInOptions: [
    google,
    fb

  ],

};




const SignIn = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user)
      props.selectUser(user)
    })

  })
  return (
    <div style={{ marginTop: "150px" }}>
      <h1 style={{ marginLeft: "460px" }} >Hostel Allocation</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>

  )
}

const mapStateToProps = (state) => {

  return {
    user: state.selectedUser
  }
}
const mapActionsToProps = () => {
  return {
    selectUser
  }
}
export default connect(mapStateToProps, mapActionsToProps)(SignIn);