import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.content}>
          <h1>Contact Us</h1>
          <p>Questions, bug reports, feedback, feature requests — we're here for it all.</p>
        </div>
      </div>

      <div className={styles.divForm}>
        <form className={styles.contactForm} >
          <label>
            Your Email Address
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Subject
            <input type="text" required />
          </label>
          <label>
            How can we help?
            <textarea required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}

export default Contact
