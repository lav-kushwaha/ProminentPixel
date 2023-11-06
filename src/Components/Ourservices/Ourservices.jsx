import React from 'react'
import './Ourservices.css'
import {Link} from 'react-router-dom'

const Ourservices = () => {
  return (
    <section className='ourservices-section'>
        <div className="ourservices-container">
            <div className="our-services">
            <span>OUR SERVICES</span>
            <h2>HIGH QUALITY SERVICES FOR AFFORDABLE PRICE</h2>
            <p>Not only we provide reliable and high quality services but also we are committed to provide the best at an affordable price.</p>
            </div>
            <div className="development-section">
                <div className="java-web-development blue">
                    <h2>Java Web Development Services</h2>
                    <p>ProminentPixel with its highly-secured and flexible approach, provides the Java web development services to the clients in the given time frame.</p>
                </div>
                <div className="java-web-development orange">
                    <h2>Java Software Development</h2>
                    <p>We deliver the Java software business solutions to small, medium, and large scale enterprises. Expert Java programmers of ProminentPixel have several years of experience in handling various complex projects.</p>
                </div>
                <div className="java-web-development yellow">
                    <h2>Big Data Development</h2>
                    <p>With proven experience in Big Data, our expert team helps you make better and fast decisions by implementing the technologies you need to understand and manage.</p>
                </div>
                <div className="java-web-development green">
                    <h2>Cloud - DevOps Development Services</h2>
                    <p>You can transform your ideas into reality by running your applications on the cloud. Our customized DevOps made by our experts can help your products to increase their scalability and reliability while minimizing operational costs.</p>
                </div>
            </div>
        </div>
        <div className="view-more-links">
           <Link to="coming-soon">View More</Link>
        </div>
    </section>
  )
}

export default Ourservices