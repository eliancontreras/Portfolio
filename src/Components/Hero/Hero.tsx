import "./Hero.css"
import menuIcon from "./assets/menu-icon.svg"
import resumeIcon from "./assets/resume-icon.svg"
import resume from "./assets/resume.pdf"
import meIcon from "./assets/me-icon.png"
import { useState, useRef, useEffect } from "react"

function Hero(){
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const headerRef = useRef(null)
    useEffect(()=>{
        makeHeaderStick()
    }, [])
    function closeOnClick(){
        setShowMobileMenu(false)
    }

    function makeHeaderStick(){
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) { // Adjust scroll position as needed
                if(headerRef.current){
                    (headerRef.current as HTMLElement).classList.add("sticky");
                }}
            else{
                if(headerRef.current){
                    (headerRef.current as HTMLElement).classList.remove("sticky");
                }
            }
        });
    }
    const mappedNavLinks = (
        <>
        <a 
        onClick={closeOnClick}
        href="#home">Home</a>
        <a 
        onClick={closeOnClick}
        href="#projects">Projects</a>
        <img src={meIcon} alt="image of Nsikan-David" />
        <a 
        onClick={closeOnClick}
        href="#about">About</a>
        <a 
        onClick={closeOnClick}
        href="#contact">Contact Me</a>
        </>
    )

    return (
        <section id="home" className="hero-section">
            <div className="inner-wrapper">
            <header ref={headerRef}>
            <nav className={showMobileMenu ? "show" : ""}>
                <ul>
                <button onClick={()=>{
                    setShowMobileMenu(false)
                }}>X</button>

                    {mappedNavLinks}
                </ul>
            </nav>

            <button
            onClick={()=>{
                setShowMobileMenu(true)
            }}
            className="menu-btn">
                <img src={menuIcon} alt="menu icon" />
            </button>
        </header>

<div className="hero-text-container">
        <h1>Fullstack Developer</h1>

        <p>Hey there! I am Elian Contreras, a fullstack developer. I'm a passionate Software development. With several years of experience in the side, also have improved my skills in creating smooth connections between web applications and AI technologies, ensuring smooth data flow and enhanced functionality</p>

        {/* <a href={resume} target="_blank" rel="noopener noreferrer">
        <button className="primary-btn">
            <img src={resumeIcon} alt="resume-icon" /> 
            Resume
            </button>
        </a> */}

</div>
            </div>
        </section>
    )
}

export default Hero