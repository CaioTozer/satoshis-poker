import { colors } from "@/styles/colors";
import styled from "styled-components";

export const InputStyles = styled.input`
display: flex;
align-items: center;
width: calc(100% - 160px);
padding: 16px;
border-radius: 8px;
background: ${colors.surface};
border: none;
color: ${colors.text.title};
cursor: not-allowed;

&::placeholder {
    color:  ${colors.text.title};
    font-size: 16px;
    font-weight: 500;
}
`