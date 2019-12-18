import React from "react"
import logo from "../images/ecell-logo.png"
import "../styles/navbar.css"
import { Link } from "gatsby"

const menus = [
  { id: 1, menuName: "Events", url: "/events" },
  { id: 2, menuName: "About Us", url: "/about" },
  { id: 3, menuName: "Contact Us", url: "/contact" },
]

function Navbar() {
  return (
    <React.Fragment>
      <header className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="Ecell" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu">
          {menus.map(menu => {
            return (
              <li className="menu-list">
                <Link
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    color: "#000",
                  }}
                  key={menu.id}
                  to={menu.url}
                >
                  {menu.menuName}
                </Link>
              </li>
            )
          })}
        </ul>
      </header>
    </React.Fragment>
  )
}

export default Navbar
