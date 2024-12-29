import { Github, Instagram, Linkedin } from "lucide-react";
import { Column, FooterStyles, IconsContainer, InfoContainer, Line, Text, TextContainer, Title } from "./styles";
import { colors } from "@/styles/colors";

export default function Footer() {
    return (
        <FooterStyles>
            <InfoContainer>
                <Column>
                    <Title>Serviços:</Title>
                    <TextContainer>
                        <Text>
                            Transferências
                        </Text>
                        <Text>
                            Compras e vendas de fichas
                        </Text>
                        <Text>
                            Aposte como um sheik
                        </Text>
                    </TextContainer>
                </Column>
                <Column>
                    <Title>
                        Suporte:
                    </Title>
                    <Text>
                        caiotozer592@gmail.com
                    </Text>
                </Column>
                <Column>
                    <Title>
                        Redes Sociais:
                    </Title>
                    <IconsContainer>
                        <a href="https://www.instagram.com/caio_tozer/" target="_blank">
                            <Instagram size={32} color={colors.text.support} />
                        </a>
                        <a href="https://www.linkedin.com/in/caiotozer/" target="_blank">
                            <Linkedin size={32} color={colors.text.support} />
                        </a>
                        <a href="https://github.com/CaioTozer" target="_blank">
                            <Github size={32} color={colors.text.support} />
                        </a>
                    </IconsContainer>
                </Column>
            </InfoContainer>
            <Line />
            <Text>
                Satoshis-poker©2024 /  Desenvolvido Por Caio Tozer
            </Text>
        </FooterStyles>
    )
}