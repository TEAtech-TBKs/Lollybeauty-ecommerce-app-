import React from 'react'
import '../pages/Offer.css'

const Offer = () => {
  return (
    <section className='offer-body'>
            <center className='offer-heading'>We Offer</center>
        <div className="img-container">
            <div className="offer-img1">
            <div className="offer-text">
             <h3>Skin</h3>
             <p>Radiant skincare products that nourish and glow.</p>
          </div>
            </div>

            <div className="offer-img2">
            <div className="offer-text">
             <h3>Hair</h3>
             <p>Luxurious treatments and care for healthy strands.</p>
          </div>
            </div>
            
        <div className="offer-img3">
             <div className="offer-text">
               <h3>Makeup</h3>
               <p>From subtle to bold products to express your beauty.</p>
             </div>
        </div>
        </div>
    </section>
  )
}

export default Offer