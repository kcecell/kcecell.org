import React, { useState } from "react"
import styles from "../styles/contact.module.css"

const Button = ({ text }) => (
  <button className={styles.sentButton} type="submit">
    {text}
  </button>
)

const Contact = () => {
  let [isSent, setIsSent] = useState(false)
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [subject, setSubject] = useState("")
  let [message, setMessage] = useState("")

  return (
    <section style={{ marginBottom: 10 }}>
      <h1 className={styles.header}>Contact Us</h1>
      <section className={styles.main}>
        <section className={styles.formContainer}>
          <form
            className={styles.form}
            onSubmit={async event => {
              event.preventDefault()
              //send to backend API
              // const data = {
              //   name,
              //   email,
              //   subject,
              //   message,
              // }
              // const url = "http://localhost:4000/mail"
              // await fetch(url, {
              //   method: "POST",
              //   mode: "no-cors",
              //   body: JSON.stringify(data),
              // })
              //sent
              setIsSent(true)
              setName("")
              setEmail("")
              setSubject("")
              setMessage("")
              window.scrollTo(0, 0)
            }}
          >
            <label htmlFor="uname">Name: </label>
            <input
              className={styles.inputs}
              id="uname"
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
              required
            />
            <label htmlFor="uemail">Email: </label>
            <input
              className={styles.inputs}
              id="uemail"
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
            />
            <label htmlFor="usubject">Subject: </label>
            <input
              className={styles.inputs}
              id="usubject"
              type="text"
              value={subject}
              onChange={event => setSubject(event.target.value)}
              required
            />
            <label htmlFor="umessage">Message: </label>
            <textarea
              className={styles.inputs}
              id="umessage"
              placeholder="Write message .."
              style={{ height: 120 }}
              value={message}
              onChange={event => setMessage(event.target.value)}
              required
            ></textarea>
            {isSent ? <Button text={"Sent"} /> : <Button text={"Send"} />}
          </form>
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
