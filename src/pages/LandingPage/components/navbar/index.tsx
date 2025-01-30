import { colors } from "@/styles/colors";
import { ButtonContainer, ButtonMobile, Container, IconContainer, Link, RightItems, Topics, TopicsMobile } from "./styles";
import { ChevronRight, CircleDollarSign, Menu, X } from 'lucide-react';
import Button from "@/components/Button";
import { useCallback, useState } from "react";

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false)

    const handleScrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <Container>
            <RightItems>
                <CircleDollarSign size={48} color={colors.text.title} />
                {
                    showLinks &&
                    <TopicsMobile>
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
                        <ButtonMobile>
                            Em breve...
                            <ChevronRight />
                        </ButtonMobile>
                    </TopicsMobile>
                }
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
            <ButtonContainer>
                <Button>
                    Em breve...
                    <ChevronRight />
                </Button>
            </ButtonContainer>
            <IconContainer>
                {showLinks ?
                    <X size={48} color={colors.text.title} onClick={() => setShowLinks(!showLinks)} /> :
                    <Menu size={48} color={colors.text.title} onClick={() => setShowLinks(!showLinks)} />
                }
            </IconContainer>
        </Container>
    )
}