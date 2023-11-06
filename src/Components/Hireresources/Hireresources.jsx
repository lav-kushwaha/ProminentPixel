import React from 'react'
import './Hireresources.css'
import img1 from '../../assets/asset13.svg'
import img2 from '../../assets/asset14.svg'
import img3 from '../../assets/asset15.svg'
import img4 from '../../assets/asset16.svg'
import img5 from '../../assets/asset17.svg'
import img6 from '../../assets/asset18.svg'
import img7 from '../../assets/asset19.png'
import img8 from '../../assets/asset2.svg'
import {Link} from 'react-router-dom'

const Hireresources = () => {
  return (
   <section className='Hire-resources-section'>
    <div className="hire-resources-container">
        <h2>HIRE RESOURCES</h2>
        <p>Not Only We Provide Reliable And High Quality Developer.</p>
        <div className="hire-resources">
            <div className="hire-java-developer">
               <img src={img1} alt="#" />
                <p>Hire Java Developer</p>
            </div>
            <div className="hire-java-developer">
                <img src={img2} alt="#" />
                <p>Hire SpringBoot Developer</p>
            </div>
            <div className="hire-java-developer">
                <img src={img3} alt="#" />
                <p>Hire Apache Solr Developer</p>
            </div>
            <div className="hire-java-developer">
                <img src={img4} alt="#" />
                <p>Hire ElasticSearch Developer</p>
            </div>
            <div className="hire-java-developer">
                <img src={img5} alt="#" />
                <p>Hire Apache Hadoop Developer</p>
            </div>
            <div className="hire-java-developer">
                <img src={img6} alt="#" />
                <p>Hire Apache Spark Developer</p>
            </div>
            <div className="hire-java-developer">
                <img src={img7} alt="#" />
                <p>Hire NLP Developer</p>
            </div>
            <div className="hire-java-developer">
                <img src={img8} alt="#" />
                <p>Hire AI / ML Developer</p>
            </div>
        </div>
        <div className="hire-view-more-links">
           <Link to="coming-soon">View More</Link>
        </div>
    </div>
   </section>
  )
}

export default Hireresources