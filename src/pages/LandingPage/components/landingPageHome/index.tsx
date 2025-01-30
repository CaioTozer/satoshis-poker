import Input from "@/components/Input";
import { Container, Form, LandingHomeImage, LandingHomeImageMobile, Title, TitleInput } from "./styles";
import Image from "@/assets/LandingPage/Dashboard.avif"
import Button from "@/components/Button";
import { ChevronRight } from 'lucide-react';

export default function LandingPageHome() {
    return (
        <Container id="Home">
            <TitleInput>
                <Title>Bem Vindo ao Satoshi's Poker! Sua melhor corretora de <span>CryptoPoker</span>!</Title>
                <LandingHomeImageMobile src={Image} />
                <Form>
                    <Input />
                    <Button>
                        Em breve...
                        <ChevronRight />
                    </Button>
                </Form>
            </TitleInput>
            <LandingHomeImage src={Image} />
        </Container>
    )
}