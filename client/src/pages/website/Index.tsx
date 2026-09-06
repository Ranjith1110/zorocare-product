import EcosystemFeatures from "../../components/website/home/EcosystemFeatures"
import Services from "../../components/website/home/Services"
import Hero from "../../components/website/home/Hero"
import Navbar from "../../components/website/Navbar"
import TrustAndPartners from "../../components/website/home/TrustAndPartners"
import HealthTips from "../../components/website/home/HealthTips"
import Footer from "../../components/website/Footer"

const Index = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <EcosystemFeatures />
            <TrustAndPartners />
            <HealthTips />
            <Footer />
        </>
    )
}

export default Index
