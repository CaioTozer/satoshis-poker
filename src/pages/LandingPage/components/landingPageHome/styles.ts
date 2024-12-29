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
`

export const LandingHomeImage = styled.img`
width: 40%;
border-radius: 12px;
`

export const TitleInput = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
width: 35%;
`

export const Form = styled.div`
display: flex;
align-items: center;
gap: 12px;
`