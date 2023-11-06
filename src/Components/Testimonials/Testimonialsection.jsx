import "./Testimonialsection.css"
import img from '../../assets/asset32.png'


 const Testimonialsection = () => {
  return (
    <>
     <section className="testimonial-section">
        <div className="testimonial-container">
        <div className="left-testimonial">
            <div className="feedback-container">
            <div className="feedback1">
                <img src={img} alt="#" />
                <p>I am really happy to choose ProminentPixel for Cloud-DevOps development services. The services are of high quality and affordable, and I am going to choose the same team again for my further projects. </p>
            </div>
            <h2>BRIAN E. PONDER</h2>
            <p>CEO, Prime Cloud Solutions</p>
            </div>
            <div className="feedback-container feed2">
            <div className="feedback1">
                <img src={img} alt="#" />
                <p>We have been working with ProminentPixel for more than 3 years now and it is really positive experience for my project and company as well.</p>
            </div>
            <h2>NORMAN A. GONZALEZ</h2>
            <p>CEO, De-Jaiz LLP</p>
            </div>
        </div>
        <div className="right-testimonial">
            <span>OUR TESTIMONIALS</span>
            <h2>INSPIRATION COMES OF WORKING EVERY DAY.</h2>
            <p>Our sole aim is customer satisfaction, and so we design and provide the customized services based on the client’s requirements. A few words from our happy customers.</p>
        </div>
        </div>
     </section>
    </>
  );
}
export default Testimonialsection;