import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from "./SignupFormPage.module.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [zip, setZip] = useState("") // Must be EXACTLY 5 characters; specify in users table
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
      setErrors([]);
      return dispatch(sessionActions.signup({ email, password, firstName, lastName, zip })) // Add firstName, lastName, ZIP, bday once added to users table
        .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const handleHeaderClick = (e) => {
    navigate('/')
  }

  const errorPlacement = errors === [] ? '' : errors.map(error => <li key={error}>{error}</li>)

  return (
    <>
      <h1 id={styles.header} onClick={handleHeaderClick}>kelp</h1>
      <div id={styles.signupForm}>
        <form className={styles.signupFormClass} onSubmit={handleSubmit}>
          <h3>Sign Up for Kelp</h3>
          <ul>
            {errorPlacement}
          </ul>
          <input 
              type="text" 
              value={firstName}
              className={styles.nameInputs}
              placeholder=" First Name" 
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          <input 
              type="text"
              value={lastName}
              className={styles.nameInputs}
              placeholder=" Last Name" 
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <br></br>
            <input
              type="text"
              className={styles.signupInputs}
              value={email}
              placeholder=" Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br></br>
            <input
              type="password"
              className={styles.signupInputs}
              value={password}
              placeholder=" Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br></br>
          <input 
              type="text"
              className={styles.signupInputs}
              value={zip}
              placeholder=" ZIP Code" 
              onChange={(e) => setZip(e.target.value)}
              required
              />
          <br></br>
          <input type="submit" value="Sign Up" id={styles.signupButton}/>
        </form>
        <img id={styles.signupKelpLogo} src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="" />
      </div>
      
    </>
  );
}

export default SignupFormPage;