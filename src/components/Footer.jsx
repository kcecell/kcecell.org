import React from "react"
import footerStyles from "../styles/footer.module.css"
import linkedinLogo from "../images/linkedin-logo.png"
import instagramLogo from "../images/instagram-logo.png"
import facebookLogo from "../images/facebook-logo.png"
import emailLogo from "../images/email-logo.png"
import { Link } from "gatsby"

const Logo = ({ link, img, alt }) => {
  return (
    <i className={footerStyles.logo}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={alt} />
      </a>
    </i>
  )
}

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <section className={footerStyles.logoContainer}>
        <Logo
          link={"https://www.instagram.com/ecell_kccoe/"}
          img={instagramLogo}
          alt={"I"}
        />
        <Logo
          link={"https://www.facebook.com/kcecell/"}
          img={facebookLogo}
          alt={"f"}
        />
        <Logo
          link={"https://www.linkedin.com/company/kccoe-ecell"}
          img={linkedinLogo}
          alt={"in"}
        />
        <Link style={{ margin: "0px 15px" }} to="/contact">
          <img src={emailLogo} alt="Email" />
        </Link>
      </section>
      <p className={footerStyles.text}>
        WebDev Team KC Ecell © 2019 | KC Ecell.
      </p>
    </footer>
  )
}

export default Footer
