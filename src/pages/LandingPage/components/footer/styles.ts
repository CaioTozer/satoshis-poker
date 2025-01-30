import { colors } from "@/styles/colors";
import styled from "styled-components";

export const FooterStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background: none;
border-top: 1px solid ${colors.surface};
padding-bottom: 40px;
`

export const InfoContainer = styled.div`
display: flex;
justify-content: center;
gap: 10%;
padding-block: 90px;
width: 100%;

@media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding-block: 40px;
  }
`

export const Title = styled.h3`
font-size: 24px;
font-weight: 600;
color: ${colors.text.title};
`

export const Line = styled.div`
width: 700px;
height: 2px;
margin-bottom: 8px;
background-color: ${colors.surface};

@media (max-width: 900px) {
    width: 100%;
  }
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`
export const Text = styled.p`
font-size: 16px;
font-weight: 500;
color: ${colors.text.support};

@media (max-width: 900px) {
    font-size: 14px;
    text-align: center;
  }
`

export const IconsContainer = styled.div`
display: flex;
align-items: center;
gap: 16px;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
gap: 16px;

@media (max-width: 900px) {
    align-items: center;
  }
`