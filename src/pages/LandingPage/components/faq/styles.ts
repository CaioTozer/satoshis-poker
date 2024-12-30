import { colors } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 48px;
`

export const FaqContainer = styled.div`
display: flex;
flex-direction: column;
width: 80%;
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
`

export const QuestionAnswer = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

export const Question = styled.h3`
font-size:  20px;
font-weight: 600;
color: ${colors.text.title};
`

export const Answer = styled.p`
font-size:  16px;
font-weight: 600;
color: ${colors.text.support};
width: 90%;
`