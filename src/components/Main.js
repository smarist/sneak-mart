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
            <div className='prices'>
                <div className='new-price'>
                    <span className='price'>$125.00</span>
                    <span className='percentage'>50%</span>
                </div>
                <span className='prev-price'>$250.00</span>
            </div>
            
            <div className='buttons'>
                <button className='qty-btn'>
                    <span><img src={minus} alt="minus" className='minus'></img></span>
                    <span>0</span>
                    <span><img src={plus} alt="plus" className='plus'></img></span>
                </button>
                <button className='cart-btn'><img src={cart} alt="cart" className='cart-img'></img><span className='cart-txt'>Add to cart</span></button>
            </div>
        </section>
    </main>
  )
}
