import Cards from "./Cards";
import { CardsRow, Container, Subtitle, Title } from "./styles";

export default function Features() {
    return (
        <Container id="Features">
            <Title>Funcionalidades da Plataforma <span>Satoshi´s Poker</span></Title>
            <Subtitle>
                A plataforma <span>Satoshi´s Poker</span> foi desenvolvida para proporcionar uma
                experiência de poker única e sem envolver dinheiro real.
                Confira as principais funcionalidades disponíveis:
            </Subtitle>
            <CardsRow>
                <Cards
                    title="Comprar Fichas de Poker"
                    subtitle="Adquira fichas para suas partidas de poker de forma simples e rápida, para começar a jogar com seus amigos."
                />
                <Cards
                    title="Trocar Fichas de Poker por Crypto Poker"
                    subtitle="Converta suas fichas de poker em Crypto Poker para realizar apostas mais dinâmicas e personalizadas durante o jogo"
                />
            </CardsRow>
            <CardsRow>
                <Cards
                    title="Transferir Crypto Poker para Amigos"
                    subtitle="Transfira Crypto Poker entre amigos de maneira instantânea e sem complicações, garantindo uma experiência de jogo compartilhada."
                />
                <Cards
                    title="Comprar Crypto Poker"
                    subtitle="Adquira Crypto Poker diretamente, sem intermediários, para personalizar ainda mais sua experiência de apostas durante as partidas."
                />
            </CardsRow>
        </Container>
    )
}