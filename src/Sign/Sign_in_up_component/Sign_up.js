import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from '../Sign.module.css'; // Import CSS module styles

const SignUpForm = () => {
  return (
    
    <form action="#" className={styles['sign-up-form']}>
      <h2 className={styles.title}>Sign up</h2>
      <div className={styles['input-field']}>
        <i class="bi bi-person"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className={styles['input-field']}>
        <i class="bi bi-envelope"></i>
        <input type="email" placeholder="Email" />
      </div>
      <div className={styles['input-field']}>
        <i class="bi bi-key"></i>
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" className={styles.btn} value="Sign up" />
      <p className={styles['social-text']}>Or Sign up with social platforms</p>
      <div className={styles['social-media']}>
        <a href="#" className={styles['social-icon']}>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className={styles['social-icon']}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className={styles['social-icon']}>
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a href="#" className={styles['social-icon']}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </form>
  );
};

export default SignUpForm;
