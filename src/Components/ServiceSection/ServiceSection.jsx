import React from 'react';
import './Service.css'
import application from '../../assets/asset23.svg'
import DataMigration from '../../assets/asset24.svg'
import Consulting from '../../assets/asset25.svg'
import Maintance from '../../assets/asset26.svg'

const ServiceSection = () =>{
    return(
        <>
        <section className='home-service-section'>
        <div className="home-service">
           <div className="application-development">
                <div className="img1">
                <img src={application} alt="application" />
                </div>
                <h2>Application Development</h2>
                <p>We build sophisticated business applications that are robust and scalable.</p>
           </div>
           <div className="application-development">
                <div className="img2">
                <img src={DataMigration} alt="DataMigration" />
                </div>
                <h2>Data Migration</h2>
                <p>We build sophisticated business applications that are robust and scalable.</p>
           </div>
           <div className="application-development">
                <div className="img3">
                <img src={Consulting} alt="application" />
                </div>
                <h2>Consulting & Enterprise Training</h2>
                <p>Support to face your challenges and fulfill your goals.</p>
           </div>
           <div className="application-development">
              <div className="img4">
              <img src={Maintance} alt="application" />
              </div>
                <h2>Maintenance & Support</h2>
                <p>Excellent maintenance and support team offers adaptive and perfect solutions.</p>
           </div>
           </div>
        </section>
        </>
    )
}
export default ServiceSection;