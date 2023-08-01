import "./hero.css"
import React from 'react'
import hero from "../../assets/images/hero-image.png"
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='flexCenter innerWidth paddings hero-container'>
            {/* left direcction */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/> 
                    <h1>
                        Discover<br/>Most Suitable<br/>property
                    </h1>
                </div>

                <div className="flexColStart hero-des">
                    <span>find a variaty of properties that suit you very easilty</span>
                    <span>forget all difficulties  in finding a residence for you</span>
                </div>

                <div className="search-bar flexCenter">
                <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text"/>
                    <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={8000} end={9000} duration={4}/>
                            <span>+ </span>
                        </span>
                        <span>Premium Products</span>
                        
                    </div>
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span>Happy customers</span>
                        
                    </div>
                    <div className="flexColStart stat">
                        <span>
                            <CountUp  end={20} />
                            <span>+</span>
                        </span>
                        <span>awards winnings</span>
                        
                    </div>
                </div>
            </div>

            
            
            {/* right direcction */}
            <div className="hero-right">
                <div className="image-container">
                    <img src={hero} alt="" />
                </div>    
            </div>
        </div>
        
    </section>
  )
}

export default Hero