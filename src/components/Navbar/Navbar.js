import React from 'react'
import { MenuItems } from "./MenuItems"
import "./Navbar.css"
import { Link } from "react-router-dom"
/* these two don't work: */ 
// import {useMatch, useResolvedPath } from "react-router-dom"
import { motion } from "framer-motion"

// Convert to functional component at some point
class Navbar extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    {/* Takes back to homepage on click, take out if it breaks anything */}
                    <Link to="/"><img width="55px"src="Logo.png" alt="polly liu logo"/></Link>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* This uses fontawesome for icons */}
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>

                {/* Creating all menu items */}
                {MenuItems.map((item, index) => {
                    return (
                    <li key={index}>
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        {/* Link element for routing */}
                        <Link className={item.cName}

                        // Close collapsed menu on click of a menu
                        // *null ensures that collapsed menu isn't opened if clicking when not collapsed
                        onClick={(this.state.clicked===true) ? this.handleClick : null}

                        // Only link outside of the website if you want to contact me
                        // Currently not working
                        to={
                            // Old logic for when contact page was a mailto: Link
                            // (item.title==="Contact") ? {pathname: "mailto: pollyliu4@gmail.com"} : 
                            item.url}

                        // Only open a new tab if you want resume or to contact me
                        // target={(item.title==="Resume" || item.title ==="Contact") ? "_blank" : null}
                        >
                        {item.title}
                        </Link>
                        </motion.div>
                    </li>
                    )
                })}

                </ul>
            </nav>
        )
    }
}

export default Navbar