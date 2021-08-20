import { connect } from 'react-redux';
import { selectUser, setBooked } from './actions';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import SignIn from './Pages/SignIn';
import { useEffect } from 'react';
import db from './firebase';
import logo from './images/logo.gif';
import logo2 from './images/logo2.png';
import './App.css';
import Welcome from './Pages/Welcome/Welcome';
import SelectHostel from './Pages/SelectHostel/SelectHostel';
import ChooseHostel from './Pages/ChooseHostel/ChooseHostel';
import SelectFloor from './Pages/SelectFloor/SelectFloor';
import { auth, google, fb } from './firebase';
import SelectGirlsHostel from './Pages/SelectGirlsHostel/SelectGirlsHostel';
import { useHistory } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
function App(props) {
  let history = useHistory()
  // useEffect(() => {
  //   db.collection("users").add({
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   })
  //     .then((docRef) => {
  //       console.log("Document written with ID: ", docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });
  // })
  const Logout = () => {
    auth.signOut();
    props.selectUser(null);
    props.setBooked(null);
    history.push('/signIn')
  }
  const Alert = () => {

    confirmAlert({
     
      message: 'Are you sure you really want to Logout!!!!!',
      buttons: [
        {
          label: 'Yes',
          onClick: () => Logout()
        },
        {
          label: 'No',
          onClick: () => null
        }
      ]
    });

  };
  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      props.selectUser(user)
      db.collection("bookings").get().then((querySnapshot) => {
        if(user){
          querySnapshot.forEach((doc) => {
            if (user.uid === doc.data().user) {
              const data = doc.data()
              console.log(data, "kkkk")
              if (data) {
                props.setBooked(data)
                history.push('./welcome')
              }
  
            }
  
          });
        }else{
          history.push('/signIn')
        }
    

      })
    })

  })
  return (
    <>
      <header>
        <img src={logo} alt="img" />
       {props.user&& <div className="right-header">
          <button onClick={()=> {Alert()}} className="logout">Logout</button>
          <img src={logo2} style={{width:"60px",height:"60px"}} alt="img2" />
          
          {
            <p>{props?.user?.displayName}</p>
          }
        </div>}
      </header>

      <Switch>
        <Route
          path={'/'}
          exact={true}
          name={"home"}
          render={props => {
            if (props.user == null) {
              return(
                <Redirect
                to={{
                  pathname: "/signIn"
                }}
              />
              )
            
            }
            return (
              <Redirect
                to={{
                  pathname: "/welcome"
                }}
              />
            )

          }


          }
        />

        <Route
          path={'/signIn'}
          exact={true}
          name={"sigIn"}
          render={props => (
            <SignIn {...props} />
          )}
        />

        <Route
          path={'/welcome'}
          exact={true}
          name={"welcome"}
          render={props => (
            <Welcome {...props} />
          )}
        />
        <Route
          path={'/selectHostel'}
          exact={true}
          name={"selectHostel"}
          render={props => (
            <SelectHostel {...props} />
          )}
        />
        <Route
          path={'/selectGirlsHostel'}
          exact={true}
          name={"selectGirlsHostel"}
          render={props => (
            <SelectGirlsHostel {...props} />
          )}
        />
        <Route
          path={'/chooseHostel'}
          exact={true}
          name={"chooseHostel"}
          render={props => (
            <ChooseHostel {...props} />
          )}
        />
        <Route
          path={'/selectFloor/:id/'}
          exact={true}
          name={"selectFloor"}
          render={props => (
            <SelectFloor {...props} />
          )}
        />
      </Switch>
    </>
  );
}
const mapStateToProps = (state) => {

  return {
    user: state.selectedUser
  }
}

export default connect(mapStateToProps, { selectUser, setBooked })(App);