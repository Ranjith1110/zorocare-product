import AboutHero from "../../components/website/about/AboutHero"
import CompleteCare from "../../components/website/about/CompleteCare"
import CorePillars from "../../components/website/about/CorePillars"
import VisionMission from "../../components/website/about/VisionMission"
import Footer from "../../components/website/Footer"
import Navbar from "../../components/website/Navbar"

const About = () => {
    return (
        <>
            <Navbar />
            <AboutHero />
            <VisionMission />
            <CorePillars />
            <CompleteCare />
            <Footer />
        </>
    )
}

export default About
