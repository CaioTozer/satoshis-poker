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
`

export const RightItems = styled.div`
display: flex;
align-items: center;
gap: 48px;
`

export const Topics = styled.div`
display: flex;
align-items: center;
gap: 1vw;
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
`