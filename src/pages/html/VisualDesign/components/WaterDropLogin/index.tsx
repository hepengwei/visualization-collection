import React from "react";
import styles from "./index.module.scss";

const WaterDropLogin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.drop}>
          <div className={styles.contentBox}>
            <h2>Sign in</h2>
            <form>
              <div className={styles.inputBox}>
                <input type="text" placeholder="Username" />
              </div>
              <div className={styles.inputBox}>
                <input type="password" placeholder="Password" />
              </div>
              <div className={styles.inputBox}>
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
        <div className={styles.btns}>
          <span>Forget</span>
          <span>Password</span>
        </div>
        <div className={`${styles.btns} ${styles.signup}`}>Signup</div>
      </div>
    </div>
  );
};

export default WaterDropLogin;
