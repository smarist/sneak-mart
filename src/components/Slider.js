import React, {useState} from 'react'
import thumbnail1 from "../images/image-product-1-thumbnail.jpg"
import thumbnail2 from "../images/image-product-2-thumbnail.jpg"
import thumbnail3 from "../images/image-product-3-thumbnail.jpg"
import thumbnail4 from "../images/image-product-4-thumbnail.jpg"
import sneaker1 from "../images/image-product-1.jpg"
import sneaker2 from "../images/image-product-2.jpg"
import sneaker3 from "../images/image-product-3.jpg"
import sneaker4 from "../images/image-product-4.jpg"
import previous from "../images/icon-previous.svg"
import next from "../images/icon-next.svg"



export default function Slider() {
  const [arraySneakers, setArraySneakers] = useState({
    index: 0,
    images: [sneaker1, sneaker2, sneaker3, sneaker4],
  }
  )
  
  console.log(arraySneakers)

  const nextSlide = () => {
      if (arraySneakers.index === arraySneakers.images.length - 1) {
        return setArraySneakers({ ...arraySneakers, index: 0 });
      } else {
        return setArraySneakers({ ...arraySneakers, index: arraySneakers.index + 1 });
      }
  }

  const prevSlide = () => {
    console.log("prev")
    if (arraySneakers.index === 0) {
      return setArraySneakers({ ...arraySneakers, index: arraySneakers.images.length - 1 });
    } else {
      return setArraySneakers({ ...arraySneakers, index: arraySneakers.index - 1 });
    }
  }

  return (
    <div className='slider'>
        <div className='display'>
            <img src={arraySneakers.images[arraySneakers.index]} alt="sneakers" className='b-radius'/>
        </div>
        <div className='l-hidden arrows'>
            <div className='circle'><img src={previous} alt="previous" className='arrow' onClick={prevSlide}/></div>
            <div className='circle'><img src={next} alt="next" className='arrow left-arrow' onClick={nextSlide}/></div>
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
