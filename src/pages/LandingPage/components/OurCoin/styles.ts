import { colors } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
gap: 5%;
`

export const Title = styled.h2`
font-size: 40px;
font-weight: 700;
color: ${colors.text.title};
width: 100%;
`

export const Subtitle = styled.h3`
font-size: 20px;
font-weight: 600;
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
width: 40%;
`

export const CoinImage = styled.img`
width: 23%;
border-radius: 12px;
`