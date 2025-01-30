import { colors } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
gap: 5%;
`

export const Title = styled.h1`
font-size: 54px;
font-weight: 700;
color: ${colors.text.title};
width: 100%;

span {
    color: ${colors.warning};
}

@media (max-width: 900px) {
    font-size: 28px;
    text-align: center;
  }
`

export const LandingHomeImage = styled.img`
width: 40%;
border-radius: 12px;

@media (max-width: 900px) {
    display: none;
  }
`

export const LandingHomeImageMobile = styled.img`
display: none;

@media (max-width: 900px) {
    display: block;
    width: 100%;
    border-radius: 12px;
  }
`

export const TitleInput = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
width: 35%;

@media (max-width: 900px) {
    width: 100%;
    padding-inline: 16px;
    padding-top: 48px;
  }
`

export const Form = styled.div`
display: flex;
align-items: center;
gap: 12px;
width: 100%;
`