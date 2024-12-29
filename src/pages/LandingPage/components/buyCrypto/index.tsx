import Button from "@/components/Button";
import { Container, Title } from "./styles";
import { CircleDollarSign } from "lucide-react";
import { colors } from "@/styles/colors";

export default function BuyCrypto() {
    return (
        <Container id="BuyCrypto">
            <Title>Entre na sua conta e compre <span>CryptoPoker´s</span> !</Title>
            <Button>
                Compre Cripto!
                <CircleDollarSign color={colors.secondary} />
            </Button>
        </Container>
    )
}