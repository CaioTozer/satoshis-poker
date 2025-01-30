import styled from "styled-components";

export const Container = styled.div`
padding-top: 102px;
display: flex;
flex-direction: column;
width: 100%;
gap: 120px;

@media (max-width: 900px) {
   gap: 70px;
  }
`