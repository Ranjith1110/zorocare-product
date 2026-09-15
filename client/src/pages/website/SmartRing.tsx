import Footer from "../../components/website/Footer"
import Navbar from "../../components/website/Navbar"
import SmartRingDashboard from "../../components/website/smart-ring/SmartRingDashboard"
import SmartRingFeatures from "../../components/website/smart-ring/SmartRingFeatures"
import SmartRingHero from "../../components/website/smart-ring/SmartRingHero"

const SmartRing = () => {
    return (
        <>
            <Navbar />
            <SmartRingHero />
            <SmartRingDashboard />
            <SmartRingFeatures />
            <Footer />
        </>
    )
}

export default SmartRing
