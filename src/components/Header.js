import React, {useState} from 'react'
import logo from "../images/logo.svg"
import menu from "../images/icon-menu.svg"
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function handleClick(){
        console.log("done")
        setIsMenuOpen(!isMenuOpen)
    }
    console.log(isMenuOpen)
  return (
    <header className='f-row'>
        <nav className='f-row'>
            <ul className='f-row row-r menu-ul'>
                <li className='l-hidden' onClick={() => handleClick()}><img src={menu} alt="menu"/></li>
                <ul className= {isMenuOpen? "f-col" : 'f-row s-hidden nav-menu'}>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <li className='logo-menu'  ><img src={logo} alt="logo" id='logo'/></li>
            </ul>
            <ul className='f-row cart-avatar'>
                <li><img src={cart} alt="cart" /></li>
                <li><img src={avatar} alt="avatar" id='avatar'/></li>
            </ul>
        </nav>
    </header>
  )
}
