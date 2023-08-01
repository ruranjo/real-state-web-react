import "./Companies.css"
import React from 'react'
import company1 from "../../assets/images/equinix.png"
import company2 from "../../assets/images/realty.png"
import company3 from "../../assets/images/tower.png"
import company4 from "../../assets/images/prologis.png"

const Companies = () => {
  return (
    <section className='c-wrapper'>
        <div className='c-container paddings innerWidth flexCenter'>
                <img src={company1} alt="company1" />
                <img src={company2} alt="company2" />
                <img src={company3} alt="company3" />
                <img src={company4} alt="company4" />
                
        </div>
    </section>
  )
}

export default Companies