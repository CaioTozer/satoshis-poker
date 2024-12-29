import { colors } from "@/styles/colors";
import styled from "styled-components";

export const ButtonStyles = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding-block: 12px;
width: 160px;
background: none;
color: ${colors.text.title};
font-size: 16px;
gap: 8px;
font-weight: 600;
border: solid 1px ${colors.primary};
border-radius: 8px;
cursor: not-allowed;
`