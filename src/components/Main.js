import React from 'react'
import Slider from './Slider'
import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import cart from "../images/icon-cart.svg"

export default function Main() {
  return (
    <main>
        <section className='main1'>
            <Slider/>
        </section>
        <section className='main2'>
            <h3>SNEAKER COMPANY</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div>
                <span>$125.00</span>
                <span>50%</span>
                <span>$250.00</span>
            </div>
            
            <div>
                <button>
                    <span><img src={minus} alt="minus"></img></span>
                    <span>0</span>
                    <span><img src={plus} alt="plus"></img></span>
                </button>
                <button><img src={cart} alt="cart"></img>Add to cart</button>
            </div>
        </section>
    </main>
  )
}
