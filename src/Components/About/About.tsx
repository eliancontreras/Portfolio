import "./About.css"
import myImage from "./assets/me-small.png"

function About() {
  return (
    <section
      id="about"
      className='about-section'>
      <div className="inner-wrapper">

        <h1 className="main-heading">About Me</h1>

        <div className="about-container">
          <div className="about-text">

            <h2 className="sub-heading">Hey there 👋🏾</h2>

            <p className="my-description">I'm a passionate Web and AI Integration Specialist with a strong focus on API integration and bot development. With several years of experience in the side, I have improved my skills in creating smooth connections between web applications and AI technologies, ensuring smooth data flow and enhanced functionality.

I thrive on transforming complex challenges into innovative solutions, whether it involves building robust APIs, developing intelligent bots, or optimizing web integration processes. My expertise spans various programming languages and frameworks, allowing me to adapt to diverse project requirements</p>

          </div>


          <img src={myImage} alt="image of Nsikan" className="my-image" />

        </div>


      </div>

    </section>
  )
}

export default About