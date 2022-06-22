import React from 'react'
import thumbnail1 from "../images/image-product-1-thumbnail.jpg"
import thumbnail2 from "../images/image-product-2-thumbnail.jpg"
import thumbnail3 from "../images/image-product-3-thumbnail.jpg"
import thumbnail4 from "../images/image-product-4-thumbnail.jpg"
import sneaker1 from "../images/image-product-1.jpg"
import sneaker2 from "../images/image-product-2.jpg"
import sneaker3 from "../images/image-product-3.jpg"
import sneaker4 from "../images/image-product-4.jpg"



export default function Slider() {
  return (
    <div className='slider'>
        <div className='display'>
            <img src={sneaker1} alt="sneakers" className='b-radius'/>
        </div>
        <div className='thumbnails'>
            <figure className='thumbnail'>
               <img src={thumbnail1} alt="sneakers" className='b-radius'/> 
            </figure>

            <figure className='thumbnail'>
               <img src={thumbnail2} alt="sneakers" className='b-radius'/> 
            </figure>

            <figure className='thumbnail'>
               <img src={thumbnail3} alt="sneakers" className='b-radius'/> 
            </figure>

            <figure className='thumbnail'>
               <img src={thumbnail4} alt="sneakers" className='b-radius'/> 
            </figure>
            
        </div>    
    </div>
  )
}
