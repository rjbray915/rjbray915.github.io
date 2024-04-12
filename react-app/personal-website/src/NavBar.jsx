import { useState } from 'react'
import './NavBar.css'
import './other_css/font-awesome-4.7.0/css/font-awesome.min.css'
import {Link} from "react-router-dom"

function NavBar() {
    const [hamburgerOpen, toggleHamburger] = useState(false)

    var scrollHeight = document.getElementById("hamburger-content")

    function toggleMenu() {
        scrollHeight = document.getElementById("hamburger-content").scrollHeight
        console.log("clicked", scrollHeight, hamburgerOpen, document.getElementById("hamburger-content").clientHeight)
        toggleHamburger(!hamburgerOpen)
    }

    var styles = {
        scrollStyle: {
            maxHeight: "unset"
        },
        noScrollStyle: {
            maxHeight: 0
        }
    }

    return (
        <>
            <div class="navbar">
                <div class="navbar-item"><Link to="/">Home</Link></div>
                <div class="navbar-item"><Link to="about">About</Link></div>
                <div class="navbar-item"><Link to="tools">Tools</Link></div>
                <div class="navbar-item"><Link to="contact">Contact</Link></div>
            </div>
            <div class="hamburger" id="hamburger">
                <button class="hamburger-button" onClick={toggleMenu}>
                    <i class="fa fa-bars"></i>
                </button>
            </div>        
            <div class="hamburger-content" id="hamburger-content" style={{maxHeight: hamburgerOpen ? document.getElementById("hamburger-content").scrollHeight : 0}}>
                <ul class="hamburger-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="tools">Tools</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
                
            </div>
        </>
    )
}

export default NavBar;