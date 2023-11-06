import React from 'react'
import './Aboutprominentpixel.css'
import img from '../../assets/asset31.svg'
import { Link } from 'react-router-dom'

const Aboutprominentpixel = () => {
  return (
   <>
    <section className="about-prominent-pixel">
        <div className="container">
            <div className="left">
            <span>KNOW MORE</span>
            <h3>About Company</h3>
            <h2>PROMINENTPIXEL</h2>
            <p>Isn’t it surprising to know that ProminentPixel gained huge popularity all over India after a very few years of its establishment? Dedication, Hard work, Creativity, and quality services are the reasons!</p>
            <p>From the day we established ProminentPixel, our dedicated team with their efforts showed us almost 100 percent efforts.</p>
            <div className="readmore-link"><Link to="ReadMore">Read More</Link></div>
            </div>
            <div className="right">
                <img src={img} alt="about_img" />
            </div>
       </div>
    </section>
   </>
  )
}

export default Aboutprominentpixel