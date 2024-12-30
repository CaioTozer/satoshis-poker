import BuyCrypto from "./components/buyCrypto";
import FAQ from "./components/faq";
import Features from "./components/features";
import Footer from "./components/footer";
import LandingPageHome from "./components/landingPageHome";
import Navbar from "./components/navbar";
import OurCoin from "./components/OurCoin";
import { Container } from "./styles";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Container>
                <LandingPageHome />
                <OurCoin />
                <Features />
                <BuyCrypto />
                <FAQ />
                <Footer />
            </Container>
        </>
    )
}