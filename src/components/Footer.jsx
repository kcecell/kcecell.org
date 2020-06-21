import React from "react"
import footerStyles from "../styles/footer.module.css"
import linkedinLogo from "../images/linkedin-logo.svg"
import instagramLogo from "../images/instagram-logo.svg"
import facebookLogo from "../images/facebook-logo.svg"
import emailLogo from "../images/email-logo.svg"
import githubLogo from "../images/githubLogoFooter.svg"
import { Link } from "gatsby"

const Logo = ({ link, img, alt }) => {
  return (
    <i className={footerStyles.logo}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img style={{ height: "24px", width: "24px" }} src={img} alt={alt} />
      </a>
    </i>
  )
}

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <section className={footerStyles.logoContainer}>
        <Logo
          link={"https://www.instagram.com/kcecell_/"}
          img={instagramLogo}
          alt={"I"}
        />
        <Logo
          link={"https://www.facebook.com/kcecell/"}
          img={facebookLogo}
          alt={"f"}
        />
        <Logo
          link={"https://www.github.com/kcecell/"}
          img={githubLogo}
          alt={"f"}
        />
        <Link style={{ margin: "0px 15px" }} to="/contact">
          <img
            style={{ height: "24px", width: "24px" }}
            src={emailLogo}
            alt="Email"
          />
        </Link>
        <Logo
          link={"https://www.linkedin.com/company/kcecell"}
          img={linkedinLogo}
          alt={"in"}
        />
      </section>
      <p className={footerStyles.text}>
        WebDev Team KC Ecell © 2020 | KC Ecell.
        <br />
        Made with ❤️ by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.anchor}
          href="https://ehtesham.dev"
        >
          Ehtesham Siddiqui{" "}
        </a>
      </p>
    </footer>
  )
}

export default Footer
