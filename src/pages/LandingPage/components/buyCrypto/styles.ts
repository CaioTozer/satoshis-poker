import { colors } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
padding-block: 42px;
justify-content: center;
align-items: center;
background-color: ${colors.border};
`

export const Title = styled.h3`
font-size: 32px;
font-weight: 600;
color: ${colors.text.title};

span {
    color: ${colors.primary};
}
`