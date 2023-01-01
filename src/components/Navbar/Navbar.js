import React from 'react'
import { MenuItems } from "./MenuItems"
import "./Navbar.css"

class Navbar extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Polly Liu <i className="fas fa-star"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i> {/* This uses fontawesome for icons */}
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar