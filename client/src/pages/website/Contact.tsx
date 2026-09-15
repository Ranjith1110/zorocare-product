import ContactForm from "../../components/website/contact/ContactForm"
import ContactHero from "../../components/website/contact/ContactHero"
import Footer from "../../components/website/Footer"
import Navbar from "../../components/website/Navbar"

const Contact = () => {
    return (
        <>
            <Navbar />
            <ContactHero />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact
