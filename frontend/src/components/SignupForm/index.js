import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupFormPage.css";

function SignupFormPage() {
  const dispatch = useDispatch();
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

  return (
    <>
      <h1>kelp</h1>
      <div id='login-form'>
      <form className="login-form-class" onSubmit={handleSubmit}>
        <h3>Sign Up for Kelp</h3>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <input 
            type="text" 
            value={firstName}
            className="name-inputs"
            placeholder=" First Name" 
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        <input 
            type="text"
            value={lastName}
            className="name-inputs"
            placeholder=" Last Name" 
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <br></br>
          <input
            type="text"
            className="signup-inputs"
            value={email}
            placeholder=" Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br></br>
          <input
            type="password"
            className="signup-inputs"
            value={password}
            placeholder=" Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br></br>
        {/* <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required  
          />            TEST SUBMISSION BEFORE DELETING THIS
        </label> */}
        <input 
            type="text"
            className="signup-inputs" 
            value={zip}
            placeholder=" ZIP Code" 
            onChange={(e) => setZip(e.target.value)}
            required
            />
        <br></br>
        <input type="submit" value="Sign Up" id="login-button"/>
      </form>
      </div>
    </>
  );
}

export default SignupFormPage;