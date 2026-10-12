import AboutHero from "../../components/website/about/AboutHero"
import OurStory from "../../components/website/about/OurStory"
import VisionMission from "../../components/website/about/VisionMission"
import WhatWeBelieve from "../../components/website/about/WhatWeBelieve"
import Footer from "../../components/website/Footer"
import Navbar from "../../components/website/Navbar"

const About = () => {
    return (
        <>
            <Navbar />
            <AboutHero />
            <OurStory />
            <VisionMission />
            <WhatWeBelieve />
            <Footer />
        </>
    )
}

export default About
