import React, { Component } from "react"
import "./App.css"
import * as firebase from 'firebase';
import Navbar from './Navbar';

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyB0dp-sQrNr46jitztc4SRMRDzcr8NW8PY",
  authDomain: "plants-guru.firebaseapp.com"
})

class Login extends Component {
  
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
     
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <>
      <Navbar></Navbar>
     <div class="container-fluid">
      <div className="  App">
        {this.state.isSignedIn ? (
          <span>
            <b class="text-info">You are successfully logged in!</b><br/>
           
            <h3 class= "text-secondary">Welcome {firebase.auth().currentUser.displayName}</h3>
            <img class="rounded-circle"
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL} height="200px" width="200px"
            />
            <div class="row">
            
              <div class="col">
              <button class="btn-danger pull-right" onClick={() => firebase.auth().signOut()}>Log out!</button>   </div>
            </div>
            
          </span>
         
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            
          />
          
        )}
        
      </div>
      </div>
   
      
    </>
    )
  }
  
}

export default Login