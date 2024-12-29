import { colors } from "@/styles/colors";
import { Container, Link, RightItems, Topics } from "./styles";
import { ChevronRight, CircleDollarSign } from 'lucide-react';
import Button from "@/components/Button";
import { useCallback } from "react";

export default function Navbar() {

    const handleScrollToSection = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <Container>
            <RightItems>
                <CircleDollarSign size={48} color={colors.text.title} />
                <Topics>
                    <Link onClick={() => handleScrollToSection("Home")}>
                        Home
                    </Link>
                    <Link onClick={() => handleScrollToSection("BuyCrypto")}>
                        Compre crypto
                    </Link>
                    <Link onClick={() => handleScrollToSection("OurCoin")}>
                        Nossa moeda
                    </Link>
                    <Link onClick={() => handleScrollToSection("Features")}>
                        Funcionalidades
                    </Link>
                    <Link onClick={() => handleScrollToSection("FAQ")}>
                        FAQ
                    </Link>
                </Topics>
            </RightItems>

            <Button>
                Em breve...
                <ChevronRight />
            </Button>
        </Container>
    )
}