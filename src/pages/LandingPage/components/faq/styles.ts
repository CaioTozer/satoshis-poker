import { colors } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 48px;

@media (max-width: 900px) {
    gap: 24px;
  }
`

export const FaqContainer = styled.div`
display: flex;
flex-direction: column;
width: 80%;

@media (max-width: 900px) {
   width: 100%;
   padding-inline: 16px;
  }
`

export const TitleIndex = styled.div`
display: flex;
gap: 16px;
`

export const FaqHeader = styled.div`
display: flex;
justify-content: space-between;
`

export const FaqIndex = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
border: 3px solid ${colors.surface};
color: ${colors.text.title};
font-size: 16px;
border-radius: 8px;

@media (max-width: 900px) {
    width: 24px;
    height: 24px;
    font-size: 12px;
  }
`

export const IconContainerPlus = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 4px;
height: fit-content;
width: fit-content;

&:hover {
    color: ${colors.surface};
}
`

export const IconContainerMinus = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
padding: 4px;
background-color: ${colors.secondary};
height: fit-content;
width: fit-content;
`

export const Title = styled.h3`
font-size: 48px;
font-weight: 600;
color: ${colors.text.title};

@media (max-width: 900px) {
    font-size: 32px;
  }
`

export const QuestionAnswer = styled.div`
display: flex;
flex-direction: column;
gap: 16px;

@media (max-width: 900px) {
    width: calc(100% - 24px);
  }
`

export const Question = styled.h3`
font-size:  20px;
font-weight: 600;
color: ${colors.text.title};

@media (max-width: 900px) {
    font-size:  14px;
  }
`

export const Answer = styled.p`
font-size:  16px;
font-weight: 600;
color: ${colors.text.support};
width: 90%;

@media (max-width: 900px) {
    width: 100%;
    font-size: 11px;
  }
`