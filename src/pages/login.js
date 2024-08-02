import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In functionality here
    // You can use Firebase, Google OAuth, or another method
    // On success, navigate to the /onebox screen
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    // Implement sign-up logic here (e.g., API call to your backend)
    // For example, sending email and password to your server for registration
    // On success, navigate to the /onebox screen
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/onebox");
  };

  return (
    <div className={styles.login}>
      <img
        className={styles.noiseAnimationIcon}
        alt=""
        src="/noiseanimation@2x.png"
      />
      <section className={styles.root}>
        <div className={styles.numberedItemParent}>
          <div className={styles.numberedItem}>
            <div className={styles.numberedItem1}>
              <div className={styles.numberedItem2}>
                <div className={styles.createANew}>Create a new account</div>
                <div className={styles.numberedItem3}>
                  <div className={styles.nestedItem} onClick={handleGoogleSignIn}>
                    <div className={styles.nestedItem1}>
                      <img
                        className={styles.nestedItemIcon}
                        loading="lazy"
                        alt=""
                        src="/frame.svg"
                      />
                      <div className={styles.signUpWith}>
                        Sign Up with Google
                      </div>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSignUp} className={styles.form}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    required
                  />
                  <button type="submit" className={styles.button}>
                    Create an Account
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.loginContentParent}>
            <div className={styles.loginContent}>
              <div className={styles.signInLink}>
                <div className={styles.alreadyHaveAnAccountParent}>
                  <div className={styles.alreadyHaveAn}>
                    Already have an account?
                  </div>
                  <div className={styles.signIn}>Sign In</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;