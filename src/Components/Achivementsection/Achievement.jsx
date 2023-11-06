import React from 'react'
import './Achievement.css'
import img1 from '../../assets/asset43.svg'
import img2 from '../../assets/asset28.svg'
import img3 from '../../assets/asset29.svg'
import img4 from '../../assets/asset30.svg'

const Achivement = () => {
  return (
     <>
     <section className='achieve-section'>
        <div className="achievements-section">
            <div className="achievement-content">
                <h2>OUR ACHIEVEMENTS</h2>
                <p><span>ProminentPixel</span> has developed its popularity through its unbeatable services like any other top company. Working on thousands of projects, our expert team has gained the experience in the way that they can manage multiple projects at a time.</p>
                <p>Since the beginning, we have achieved many awards, appreciation, and most importantly the customer satisfaction.</p>
            </div>
            <div className="achievement-number-container">
                <div className="lines-of-code">
                    <img src={img1} alt="linesofcode" />
                    <div className="lines-number">
                        <h2>3416K</h2>
                        <p>LINES OF CODE</p>
                    </div>
                </div>
                <div className="lines-of-code">
                    <img src={img2} alt="linesofcode" />
                    <div className="lines-number">
                        <h2>4579</h2>
                        <p>CUPS OF COFFEE</p>
                    </div>
                </div>
                <div className="lines-of-code">
                    <img src={img3} alt="linesofcode" />
                    <div className="lines-number">
                        <h2>229</h2>
                        <p>FINISHED PROJECTS</p>
                    </div>
                </div>
                <div className="lines-of-code">
                    <img src={img4} alt="linesofcode" />
                    <div className="lines-number">
                        <h2>148</h2>
                        <p>SATISFIED CLIENTS</p>
                    </div>
                </div>
            </div>
            </div>
     </section>
     </>
  )
}

export default Achivement