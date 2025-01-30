import { colors } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 100px;
background-color: ${colors.background};
padding-inline: 1vw;
position: fixed;
z-index: 5;

@media (max-width: 900px) {
    height: max-content;
    padding-inline: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
    align-items: start;
  }
`

export const RightItems = styled.div`
display: flex;
align-items: center;
gap: 48px;

@media (max-width: 900px) {
    width: 100%;
    align-items: start;
    gap: 0px;
  }
`

export const Topics = styled.div`
display: flex;
align-items: center;
gap: 1vw;

@media (max-width: 900px) {
    display: none;
  }
`

export const TopicsMobile = styled.div`
display: none;

@media (max-width: 900px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 48px);
    padding-top: 64px;
    gap: 12px;
  }
`

export const Link = styled.p`
font-size: 16px;
font-weight: 600;
color: ${colors.text.body};
cursor: pointer;
padding: 8px;
border-radius: 8px;
user-select: none;

&:hover {
    background-color: ${colors.border};
}

@media (max-width: 900px) {
    font-size: 24px;
  }
`

export const ButtonContainer = styled.div`
display: block;

@media (max-width: 900px) {
    display: none;
  }
`

export const IconContainer = styled.div`
display: none;

@media (max-width: 900px) {
    display: block;
  }
`

export const ButtonMobile = styled.button`
display: none;
align-items: center;
justify-content: center;
padding-block: 12px;
width: 100%;
background: none;
color: ${colors.text.title};
font-size: 16px;
gap: 8px;
font-weight: 600;
border: solid 1px ${colors.primary};
border-radius: 8px;
cursor: not-allowed;

@media (max-width: 900px) {
    display: flex;
  }
`