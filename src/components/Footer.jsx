import React from "react"
import footerStyles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <p className={footerStyles.text}>
        WebDev Team KC Ecell © 2019 | KC Ecell.
      </p>
    </footer>
  )
}

export default Footer
