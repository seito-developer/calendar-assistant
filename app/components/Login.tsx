import React from 'react';
import styles from './Login.css';
import DB from './DB';

const firebase = DB;

export default function Login(): JSX.Element {
  const clickHandle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    // Start login
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        console.log(result)
        // const token = result.credential.accessToken;
        // const user = result.user;
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
    console.log('hi!');
  };

  return (
    <button type="button" onClick={clickHandle}>
      Login with Google
    </button>
  );
}
