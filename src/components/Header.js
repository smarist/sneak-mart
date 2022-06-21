import React from 'react'
import logo from "../images/logo.svg"
import menu from "../images/icon-menu.svg"
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

export default function Header() {
  return (
    <header>
        <nav>
            <ul>
                <li><img src={menu} alt="menu"/></li>
                <li><img src={logo} alt="logo"/></li>
            </ul>
            <ul>
                <li><img src={cart} alt="cart"/></li>
                <li><img src={avatar} alt="avatar"/></li>
            </ul>
        </nav>
    </header>
  )
}
