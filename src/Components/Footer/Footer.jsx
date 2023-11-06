import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import img1 from '../../assets/asset33.svg'
import img2 from '../../assets/asset34.svg'
import img3 from '../../assets/asset35.png'


const Footer = () => {
  return (
    <>
    <footer className='footer-section'>
      <div className="footer-container">
        <div className="first">
            <h2>Our Global Presence</h2>
            <img src={img1} alt="flag" />
            <img src={img2} alt="flag" />
            <div className="contact">
              <h2>Contact Us</h2>
              <pre>Sales 097259 77055</pre>
              <pre>Email info@prominentpixel.com</pre>
              <pre>Skype ProminentPixel - info_1118376</pre>
            </div>
        </div>
        <div className="second">
          <h2>Our Services</h2>
          <Link>Big Data Development</Link>
          <Link>Enterprise search implementation</Link>
          <Link>Artificial Intelligence development</Link>
          <Link>Natural language processing</Link>
          <Link>Data analytics</Link>
          <Link>Java Web Development</Link>
          <Link>Cloud application developement</Link>
          <Link>Java Software Development</Link>
          <Link>Application modernization</Link>
          <Link>Enterprise IT Consulting</Link>
          <Link>Application Maintenance & Support</Link>
          <Link>Cloud - DevOps Development</Link>
        </div>
        <div className="third">
            <h2>Hire Resources</h2>
            <Link>Hire Java Developer</Link>
            <Link>Hire springboot Developer</Link>
            <Link>Hire Solr Developer</Link>
            <Link>Hire ElasticSearch Developer</Link>
            <Link>Hire Big Data Developer</Link>
            <Link>Hire Hadoop Developer</Link>
            <Link>Hire Spark Developer</Link>
            <Link>Hire NLP Developer</Link>
            <Link>Hire AI / ML Developer</Link>
        </div>
        <div className="fourth">
          <h2>Our Blogs</h2>
          <img src={img3} alt="#" />
           <Link>Blog</Link>
           <Link>Java</Link>
           <Link>Spring Boot</Link>
           <Link>Spring MVC</Link>
           <Link>Apache Solr</Link>
           <Link>Apache Hadoop</Link>
           <Link>Elasticsearch</Link>
           <Link>Apache Spark</Link>
        </div>
      </div>
      <hr />
      <p> © 2009 - 2023 ProminentPixel - ALL RIGHTS RESERVED.</p>
    </footer>
    </>
  )
}

export default Footer