import { loginUser } from "../../store/session";
import { React, useState } from "react";
import { Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./LoginFormPage.module.css";
import { useDispatch } from "react-redux";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => {
    return state.session.user;
  });
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  if (sessionUser) return <Navigate to="/" />;

  
  const handleClick = (e) => {
    e.preventDefault()
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      loginUser({
        credential,
        password,
      })
    ).catch(async (res) => {
      console.log(res)
      let data;
      try {
        data = await res.clone().json();
      } catch {
        data = await res.text();
      }
      if (data?.errors) setErrors(data.errors);
      else if (data) setErrors([data]);
      else setErrors([res.statusText]);
      // setCredential("");
      // setPassword("");
      console.log(data.errors)
      console.log(errors)
    });
  };

  const demoHandleClick = (e) => {
    e.preventDefault();
    setCredential('demo@user.io')
    setPassword('password')
    return dispatch (loginUser({
      credential,
      password
    }))
  }
  return (
    <>

    <main>
      <h1 id={styles.titlepage}>kelp</h1>
      <h4 id={styles.errors}>{errors}</h4>
      <div id={styles.loginform}>
        <form className="login-form-class" onSubmit={handleSubmit}>
        <h3>Log in to Kelp</h3>
        <p id={styles.signupHere}>New to Kelp? Sign Up</p>
        <p id={styles.disclaimer}>By logging in, you agree to hire Will Pierson</p>
        <input type="submit" value="Demo User" onClick={demoHandleClick} id={styles.demoUser}/> 
          <h5>OR</h5>
          <label id="credential">
            <input
              className={styles.inputs}
              type="text"
              value={credential}
              placeholder=" Email"
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label id="password">
            <input
              className={styles.inputs}
              type="password"
              value={password}
              placeholder=" Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <p><a>Forgot password?</a></p>
          <br />
          <input type="submit" value="Log In" id={styles.loginbutton}/>
          <p><a>New to Kelp? Sign Up</a></p>
        </form>
        <img id={styles.kelpLogo} src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="" />
      </div>
      </main>
    </>
  );
}

export default LoginFormPage;
