import React, { useState } from "react"
import styles from "../styles/contact.module.css"

const Popup = () => {
  return (
    <section className={styles.popup}>
      <p>Enter full details!</p>
    </section>
  )
}

const Contact = () => {
  let [isSent, setIsSent] = useState(false)
  let [showPopup, setShowPopup] = useState(false)
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [subject, setSubject] = useState("")
  let [message, setMessage] = useState("")

  return (
    <section style={{ marginBottom: 10 }}>
      {showPopup ? <Popup /> : null}
      <h1 className={styles.header}>Contact Us</h1>
      <section className={styles.main}>
        <section className={styles.formContainer}>
          <form className={styles.form}>
            <label htmlFor="uname">Name: </label>
            <input
              className={styles.inputs}
              id="uname"
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <label htmlFor="uemail">Email: </label>
            <input
              className={styles.inputs}
              id="uemail"
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <label htmlFor="usubject">Subject: </label>
            <input
              className={styles.inputs}
              id="usubject"
              type="text"
              value={subject}
              onChange={event => setSubject(event.target.value)}
            />
            <label htmlFor="umessage">Message: </label>
            <textarea
              className={styles.inputs}
              id="umessage"
              placeholder="Write message .."
              style={{ height: 120 }}
              value={message}
              onChange={event => setMessage(event.target.value)}
            ></textarea>
          </form>
          {isSent ? (
            <button className={styles.sentButton} type="button">
              Sent
            </button>
          ) : (
            <button
              className={styles.sendButton}
              type="button"
              onClick={() => {
                //check inputs and send
                if (
                  name === "" ||
                  email === "" ||
                  subject === "" ||
                  message === ""
                ) {
                  setShowPopup(true)
                  setTimeout(() => setShowPopup(false), 2000)
                } else {
                  //send to backend API
                  setIsSent(true)
                  setName("")
                  setEmail("")
                  setSubject("")
                  setMessage("")
                }
              }}
            >
              Send
            </button>
          )}
        </section>
        <section className={styles.secondContainer}>
          {isSent ? (
            <p className={styles.text}>
              Thank you. <br />
              We will contact you shortly{" "}
              <span role="img" aria-label="Emoji">
                😊
              </span>
            </p>
          ) : (
            <p className={styles.text}>
              Ask us anything <br /> or <br /> Say Hi!{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </p>
          )}
        </section>
      </section>
    </section>
  )
}

export default Contact
