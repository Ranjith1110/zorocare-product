import Footer from "../../components/website/Footer"
import Navbar from "../../components/website/Navbar"
import CompleteCareCTA from "../../components/website/packages/CompleteCareCTA"
import PackageHero from "../../components/website/packages/PackageHero"
import PricingPackages from "../../components/website/packages/PricingPackages"

const Packages = () => {
    return (
        <>
            <Navbar />
            <PackageHero />
            <PricingPackages />
            <CompleteCareCTA />
            <Footer />
        </>
    )
}

export default Packages
