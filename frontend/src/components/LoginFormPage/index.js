import { loginUser } from "../../store/session";
import { React, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./LoginFormPage.module.css";
import { useDispatch } from "react-redux";



function LoginFormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => {
    return state.session.user;
  });
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  if (sessionUser) return <Navigate to="/" />;

  const handleLogoClick = (e) => {
    navigate('/');
  };
  
  const handleClickNew = (e) => {
    navigate('/signup');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      loginUser({
        credential,
        password,
      })
    ).catch(async (res) => {
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

  const demoHandleClick = (e) => {
    e.preventDefault();
    setCredential('demo@user.io');
    setPassword('password');
    return dispatch (loginUser({
      credential,
      password
    }));
  };

  const errorPlacement = errors ? <h4 id={styles.errors}>{errors}</h4> : null;

  return (
    <>
    <main>
      <h1 id={styles.titlePage} onClick={handleLogoClick}>kelp</h1>
      {errorPlacement}
      <div id={styles.loginform}>
        <form className="login-form-class" onSubmit={handleSubmit}>
        <h3>Log in to Kelp</h3>
        <p id={styles.signupHere} onClick={handleClickNew}>New to Kelp? Sign Up</p>
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
          <br />
          <input type="submit" value="Log In" id={styles.loginbutton}/>
          <p><a id={styles.newToKelp} onClick={handleClickNew}>New to Kelp? Sign Up</a></p>
        </form>
        <img id={styles.kelpLogo} src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="" />
      </div>
      </main>
    </>
  );
};

export default LoginFormPage;
