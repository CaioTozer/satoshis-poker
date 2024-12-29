import { CoinImage, Container, Subtitle, TextContainer, Title } from "./styles";
import Image from "@/assets/LandingPage/CriptoPoker.webp"

export default function OurCoin() {
    return (
        <Container id="OurCoin">
            <CoinImage src={Image} />
            <TextContainer>
                <Title>Nossa Moeda: CryptoPoker</Title>
                <Subtitle>
                    A Crypto Poker é uma moeda digital criada para tornar suas partidas de poker mais
                    divertidas e dinâmicas, sem envolver dinheiro real. Totalmente segura e virtual,
                    ela permite apostas e trocas entre amigos, oferecendo uma experiência divertida
                    e sem riscos financeiros. Jogue à vontade e aposte com a Crypto Poker, sem preocupações!
                </Subtitle>
            </TextContainer>
        </Container>
    )
}