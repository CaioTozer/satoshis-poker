import { CardStyles, Subtitle, Title } from "./cards.styles";

export default function Cards({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <CardStyles>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </CardStyles>
    )
}