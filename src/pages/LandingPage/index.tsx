import BuyCrypto from "./components/buyCrypto";
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
                <Footer />
            </Container>
        </>
    )
}