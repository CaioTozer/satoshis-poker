import { colors } from "@/styles/colors";
import styled from "styled-components";

export const CardStyles = styled.div`
display: flex;
flex-direction: column;
width: 330px;
height: 320px;
background: ${colors.surface};
border-radius: 16px;
align-items: center;
justify-content: center;
padding-inline: 24px;
`

export const Title = styled.h3`
font-size: 24px;
font-weight: 600;
color: ${colors.text.title};
text-align: center;
`

export const Subtitle = styled.p`
font-size: 16px;
font-weight: 500;
color: ${colors.text.body};
text-align: center;
`