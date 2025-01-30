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

@media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
  }
`

export const Title = styled.h3`
font-size: 32px;
font-weight: 600;
color: ${colors.text.title};
text-align: center;
span {
    color: ${colors.primary};
}

@media (max-width: 900px) {
    font-size: 16px;
    padding-inline: 16px;
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

@media (max-width: 900px) {
    font-size: 12px;
  }
`