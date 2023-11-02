import React from 'react'
import './Home.css'
import ServiceSection from '../ServiceSection/ServiceSection'
import Achivement from '../Achivementsection/Achievement'


const Home = () => {
  return (
    <>
   <main className='back-img'>
    <section className='hero-section'>
      <div className="home-container">
      <h4>DELIVERS VALUE</h4>
      <h2>We Deliver Value Added Services With Unique Approach To The Business Needs.</h2>
      <p>Our team of experts in Big Data, Java Development, and other IT services delivers the best services at the right time.</p>
      </div>
   </section>
   <ServiceSection/>
   <Achivement/>
   {/*spacer*/}
   <div className="spacer">
   </div>
   </main>
  
   </>
  )
}

export default Home