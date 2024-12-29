import { colors } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 48px;
align-items: center;
`

export const CardsRow = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
gap: 10%;
`

export const Title = styled.h3`
font-size: 32px;
font-weight: 600;
color: ${colors.text.title};
text-align: center;
span {
    color: ${colors.primary};
}

`

export const Subtitle = styled.p`
font-size: 24px;
font-weight: 600;
color: ${colors.text.body};
text-align: center;
width: 70%;

span {
    color: ${colors.primary};
}
`